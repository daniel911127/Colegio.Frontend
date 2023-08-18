import React, { useState, useEffect } from 'react';
import Navegacion from '../components/Navegacion';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import '../styles/pages/Informe.css';

function Informe() {
  const [regal, setRegal] = useState([]);
  const [prof, setProf] = useState([]);
  const [alum, setAlum] = useState([]);
  const [regprof, setRegprof] = useState([]);

  useEffect(() => {
    axios
      .get('https://localhost:7184/api/Alumnos')
      .then((response) => {
        setAlum(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener usuarios:', error);
      });
    axios
      .get('https://localhost:7184/api/Profesores')
      .then((response) => {
        setProf(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener usuarios:', error);
      });
    axios
      .get('https://localhost:7184/api/AlumnosMaterias')
      .then((response) => {
        setRegal(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener usuarios:', error);
      });
    axios
      .get('https://localhost:7184/api/ProfesoresMaterias')
      .then((response) => {
        setRegprof(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener usuarios:', error);
      });
  }, []);
  const informeData = regal.map((regalumn) => {
    const alumno = alum.find(
      (item) => item.identificacion === regalumn.identificacion_alumno
    );
    const profesormat = regprof.find(
      (item) => item.codigo_materia === regalumn.codigo_materia
    );
    const aprobo = regalumn.calificacion >= 3 ? 'SI' : 'NO';
    const profesorEncontrado = prof.find(
      (item) => item.identificacion === profesormat.identificacion_profesor
    );
    const nombreProf = profesorEncontrado ? profesorEncontrado.nombre : 'N/A';
    return {
      id: regalumn.id,
      identificacionAlumno: regalumn.identificacion_alumno,
      nombreAlumno: alumno ? alumno.nombre : 'N/A',
      codigoMateria: regalumn.codigo_materia,
      calificacion: regalumn.calificacion,
      ano: regalumn.ano,
      identificacionProfesor: profesormat.identificacion_profesor,
      nombreProfesor: nombreProf,
      aprobo: aprobo,
    };
  });
  return (
    <div>
      <Navegacion />
      <div className='tabla'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>ID ALUMNO</th>
              <th>NOMBRE ALUMNO</th>
              <th>CODIGO MATERIA</th>
              <th>CALIFICACION</th>
              <th>AÑO</th>
              <th>ID PROFESOR</th>
              <th>NOMBRE PROFESOR</th>
              <th>APROBO</th>
            </tr>
          </thead>
          <tbody>
            {informeData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.identificacionAlumno}</td>
                <td>{item.nombreAlumno}</td>
                <td>{item.codigoMateria}</td>
                <td>{item.calificacion}</td>
                <td>{item.ano}</td>
                <td>{item.identificacionProfesor}</td>
                <td>{item.nombreProfesor}</td>
                <td>{item.aprobo}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Informe;
