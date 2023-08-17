import React from 'react';
import Navegacion from '../components/Navegacion';
import '../styles/pages/Materias.css';
import TablaMat from '../components/TablaMat';
import axios from 'axios';

function Materias() {
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
      codigo: 0,
      nombre: e.target.nombre.value,
    };

    try {
      const response = await axios.post(
        'https://localhost:7184/api/Materias/Create',
        info
      );
      console.log('respuesta: ', response.data);
    } catch (err) {
      console.log('error al agregar: ', err.data);
    }
  };
  const actualizar = async (e) => {
    let info = {
      codigo: parseInt(e.target.id.value),
      nombre: e.target.nombre.value,
    };
    console.log(info);
    try {
      const response = await axios.post(
        'https://localhost:7184/api/Materias/Update',
        info
      );
      console.log('respuesta: ', response.data);
    } catch (err) {
      console.log('error al agregar: ', err.data);
    }
  };
  const eliminar = async (e) => {
    let info = parseInt(e.target.id.value);

    try {
      const response = await axios.delete(
        `https://localhost:7184/api/Materias/${info}`
      );
      console.log('respuesta: ', response.data);
    } catch (err) {
      console.log('error al agregar: ', err.data);
    }
  };
  return (
    <div>
      <Navegacion />
      <form className='formulario' onSubmit={HandleSubmit}>
        <input
          type='number'
          className='materias'
          name='id'
          placeholder='codigo'
        />
        <input
          type='text'
          className='materias'
          name='nombre'
          placeholder='materia'
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
      <TablaMat />
    </div>
  );
}

export default Materias;
