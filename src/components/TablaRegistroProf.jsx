import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function TablaRegistroProf() {
  const [regprof, setRegprof] = useState([]);

  useEffect(() => {
    axios
      .get('https://localhost:7184/api/ProfesoresMaterias')
      .then((response) => {
        setRegprof(response.data);
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
            <th>IDENTIFICON PROFESOR</th>
            <th>CODIGO MATERIA</th>
          </tr>
        </thead>
        <tbody>
          {regprof.map((data, id) => (
            <tr key={id}>
              <td>{data.id}</td>
              <td>{data.identificacion_profesor}</td>
              <td>{data.codigo_materia}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TablaRegistroProf;
