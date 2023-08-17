import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function TablaProf() {
  const [prof, setProf] = useState([]);

  useEffect(() => {
    axios
      .get('https://localhost:7184/api/Profesores')
      .then((response) => {
        setProf(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener usuarios:', error);
      });
  }, []);
  console.log(prof);
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
          {prof.map((prof, identificacion) => (
            <tr key={identificacion}>
              <td>{prof.identificacion}</td>
              <td>{prof.nombre}</td>
              <td>{prof.apellido}</td>
              <td>{prof.edad}</td>
              <td>{prof.direccion}</td>
              <td>{prof.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TablaProf;
