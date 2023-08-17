import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function TablaMat() {
  const [mat, setMat] = useState([]);

  useEffect(() => {
    axios
      .get('https://localhost:7184/api/Materias')
      .then((response) => {
        setMat(response.data);
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
            <th>CODIGO</th>
            <th>MATERIA</th>
          </tr>
        </thead>
        <tbody>
          {mat.map((alumn, codigo) => (
            <tr key={codigo}>
              <td>{alumn.codigo}</td>
              <td>{alumn.nombre}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TablaMat;
