import React from 'react';
import Navegacion from '../components/Navegacion';
import '../styles/pages/Profesores.css';
import axios from 'axios';
import TablaProf from '../components/TablaProf';

function Profesores() {
  const HandleSubmit = (event) => {
    if (event.nativeEvent.submitter.name === 'agregar') {
      agregar(event);
    } else if (event.nativeEvent.submitter.name === 'actualizar') {
      actualizar(event);
    } else if (event.nativeEvent.submitter.name === 'eliminar') {
      eliminar(event);
    }
  };
  const agregar = async (e) => {
    let info = {
      identificacion: parseInt(e.target.id.value),
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      edad: parseInt(e.target.edad.value),
      direccion: e.target.dir.value,
      telefono: e.target.tel.value,
    };

    try {
      const response = await axios.post(
        'https://localhost:7184/api/Profesores/Create',
        info
      );
      console.log('respuesta: ', response.data);
      alert('Profesor creado!');
    } catch (err) {
      console.log('error al agregar: ', err.data);
      alert('No pudimos crearlo, revisa los datos');
    }
  };
  const actualizar = async (e) => {
    let info = {
      identificacion: parseInt(e.target.id.value),
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      edad: parseInt(e.target.edad.value),
      direccion: e.target.dir.value,
      telefono: e.target.tel.value,
    };
    console.log(info);
    try {
      const response = await axios.post(
        'https://localhost:7184/api/Profesores/Update',
        info
      );
      console.log('respuesta: ', response.data);
      alert('Profesor actualizado con exito!');
    } catch (err) {
      console.log('error al agregar: ', err.data);
      alert('No pudimos actualizarlo!');
    }
  };
  const eliminar = async (e) => {
    let info = parseInt(e.target.id.value);

    try {
      const response = await axios.delete(
        `https://localhost:7184/api/Profesores/${info}`
      );
      console.log('respuesta: ', response.data);
      alert('Profesor Borrado!');
    } catch (err) {
      console.log('error al agregar: ', err.data);
      alert('No pudimos Eliminarlo, revisa los datos');
    }
  };
  return (
    <div>
      <Navegacion />
      <form className='formulario' onSubmit={HandleSubmit}>
        <input
          type='number'
          className='profesores'
          name='id'
          placeholder='identificacion'
        />
        <input
          type='text'
          className='profesores'
          name='nombre'
          placeholder='nombre'
        />
        <input
          type='text'
          className='profesores'
          name='apellido'
          placeholder='apellido'
        />
        <input
          type='number'
          className='profesores'
          name='edad'
          placeholder='edad'
        />
        <input
          type='text'
          className='profesores'
          name='dir'
          placeholder='direccion'
        />
        <input
          type='text'
          className='profesores'
          name='tel'
          placeholder='telefono'
        />
        <div className='botones'>
          <button type='submit' className='agregar' name='agregar'>
            Agregar
          </button>
          <button type='submit' className='actualizar' name='actualizar'>
            Actualizar
          </button>
          <button type='submit' className='eliminar' name='eliminar'>
            Eliminar
          </button>
        </div>
      </form>
      <TablaProf />
    </div>
  );
}

export default Profesores;
