import React from 'react';
import Navegacion from '../components/Navegacion';
import '../styles/pages/RegistroProfesores.css';
import TablaRegistroProf from '../components/TablaRegistroProf';
import axios from 'axios';

function RegistroProf() {
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
      id: 0,
      identificacion_profesor: e.target.identificacionprof.value,
      codigo_materia: e.target.codigomat.value,
    };

    try {
      const response = await axios.post(
        'https://localhost:7184/api/ProfesoresMaterias/Create',
        info
      );
      console.log('respuesta: ', response.data);
      alert('Se asigno la materia al profesor!');
    } catch (err) {
      console.log('error al agregar: ', err.data);
      alert('Se pudimos asignarla, revisa los datos o que no este asignada ');
    }
  };
  const actualizar = async (e) => {
    let info = {
      id: parseInt(e.target.id.value),
      identificacion_profesor: parseInt(e.target.identificacionprof.value),
      codigo_materia: parseInt(e.target.codigomat.value),
    };
    console.log(info);
    try {
      const response = await axios.post(
        'https://localhost:7184/api/ProfesoresMaterias/Update',
        info
      );
      console.log('respuesta: ', response.data);
      alert('Se actualizo la asignacion de la materia al profesor!');
    } catch (err) {
      console.log('error al agregar: ', err);
      alert('Se pudimos cambiarla, revisa los datos o que no este asignada ');
    }
  };
  const eliminar = async (e) => {
    let info = parseInt(e.target.id.value);

    try {
      const response = await axios.delete(
        `https://localhost:7184/api/ProfesoresMaterias/${info}`
      );
      console.log('respuesta: ', response.data);
      alert('Se elimino la asignacion ');
    } catch (err) {
      console.log('error al agregar: ', err.data);
      alert('Se pudimos eliminarla, revisa los datos');
    }
  };
  return (
    <div>
      <Navegacion />
      <form className='formulario' onSubmit={HandleSubmit}>
        <input type='number' className='regProf' name='id' placeholder='id' />
        <input
          type='number'
          className='regProf'
          name='identificacionprof'
          placeholder='identificacion profesor'
        />
        <input
          type='number'
          className='regProf'
          name='codigomat'
          placeholder='codigo materia'
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
      <TablaRegistroProf />
    </div>
  );
}

export default RegistroProf;
