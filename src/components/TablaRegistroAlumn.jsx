import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function TablaRegistroAlumn() {
  const [regalumn, setRegalumn] = useState([]);

  useEffect(() => {
    axios
      .get('https://localhost:7184/api/AlumnosMaterias')
      .then((response) => {
        setRegalumn(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener usuarios:', error);
      });
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID ALUMNO</th>
            <th>CODIGO MATERIA</th>
            <th>CALIFICACION</th>
            <th>AÑO</th>
          </tr>
        </thead>
        <tbody>
          {regalumn.map((regalumn, id) => (
            <tr key={id}>
              <td>{regalumn.id}</td>
              <td>{regalumn.identificacion_alumno}</td>
              <td>{regalumn.codigo_materia}</td>
              <td>{regalumn.calificacion}</td>
              <td>{regalumn.ano}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TablaRegistroAlumn;
