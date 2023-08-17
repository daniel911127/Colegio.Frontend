import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function TablaAlumn() {
  const [alumn, setAlumn] = useState([]);

  useEffect(() => {
    axios
      .get('https://localhost:7184/api/Alumnos')
      .then((response) => {
        setAlumn(response.data);
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
            <th>IDENTIFICACION</th>
            <th>NOMBRE</th>
            <th>APELLIDO</th>
            <th>EDAD</th>
            <th>DIRECCION</th>
            <th>TELEFONO</th>
          </tr>
        </thead>
        <tbody>
          {alumn.map((alumn, identificacion) => (
            <tr key={identificacion}>
              <td>{alumn.identificacion}</td>
              <td>{alumn.nombre}</td>
              <td>{alumn.apellido}</td>
              <td>{alumn.edad}</td>
              <td>{alumn.direccion}</td>
              <td>{alumn.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TablaAlumn;
