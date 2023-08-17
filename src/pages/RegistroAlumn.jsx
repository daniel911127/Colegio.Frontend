import React from 'react';
import Navegacion from '../components/Navegacion';
import '../styles/pages/RegistroAlumno.css';
import TablaRegistroAlumn from '../components/TablaRegistroAlumn';
import axios from 'axios';

function RegistroAlumn() {
  const HandleSubmit = (event) => {
    event.preventDefault();
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
      id: 0,
      identificacion_alumno: parseInt(e.target.idAlumno.value),
      codigo_materia: parseInt(e.target.codMat.value),
      calificacion: parseFloat(e.target.calificacion.value),
      ano: e.target.ano.value,
    };

    try {
      const response = await axios.post(
        'https://localhost:7184/api/AlumnosMaterias/Create',
        info
      );
      console.log('respuesta: ', response.data);
    } catch (err) {
      console.log('error al agregar: ', err.data);
    }
  };
  const actualizar = async (e) => {
    let info = {
      id: parseInt(e.target.id.value),
      identificacion_alumno: parseInt(e.target.idAlumno.value),
      codigo_materia: parseInt(e.target.codMat.value),
      calificacion: parseFloat(e.target.calificacion.value),
      ano: e.target.ano.value,
    };
    console.log(info);
    try {
      const response = await axios.post(
        'https://localhost:7184/api/AlumnosMaterias/Update',
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
        `https://localhost:7184/api/AlumnosMaterias/${info}`
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
        <input type='number' className='regAlum' name='id' placeholder='id' />
        <input
          type='number'
          className='regAlum'
          name='idAlumno'
          placeholder='id alumno'
        />
        <input
          type='number'
          className='regAlum'
          name='codMat'
          placeholder='codigo materia'
        />
        <input
          type='text'
          className='regAlum'
          name='calificacion'
          placeholder='calificacion'
        />
        <input type='text' className='regAlum' name='ano' placeholder='año' />
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
      <TablaRegistroAlumn />
    </div>
  );
}

export default RegistroAlumn;
