import React, { useState, useEffect } from 'react';
import Navegacion from '../components/Navegacion';
import '../styles/pages/Alumno.css';
import TablaAlumn from '../components/TablaAlumn';
import axios from 'axios';

function Alumnos() {
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
      identificacion: parseInt(e.target.id.value),
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      edad: parseInt(e.target.edad.value),
      direccion: e.target.dir.value,
      telefono: e.target.tel.value,
    };

    try {
      const response = await axios.post(
        'https://localhost:7184/api/Alumnos/Create',
        info
      );
      console.log('respuesta: ', response.data);
    } catch (err) {
      console.log('error al agregar: ', err.data);
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

    try {
      const response = await axios.post(
        'https://localhost:7184/api/Alumnos/Update',
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
        `https://localhost:7184/api/Alumnos/${info}`
      );
      console.log('respuesta: ', response.data);
    } catch (err) {
      console.log('error al eliminar: ', err);
    }
  };
  return (
    <div>
      <Navegacion />
      <form className='formulario' onSubmit={HandleSubmit}>
        <input
          type='number'
          className='alumnos'
          name='id'
          placeholder='identificacion'
        />
        <input
          type='text'
          className='alumnos'
          name='nombre'
          placeholder='nombre'
        />
        <input
          type='text'
          className='alumnos'
          name='apellido'
          placeholder='apellido'
        />
        <input
          type='number'
          className='alumnos'
          name='edad'
          placeholder='edad'
        />
        <input
          type='text'
          className='alumnos'
          name='dir'
          placeholder='direccion'
        />
        <input
          type='text'
          className='alumnos'
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
      <TablaAlumn />
    </div>
  );
}

export default Alumnos;
