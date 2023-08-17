import './App.css';
import Home from './pages/Home';
import Profesores from './pages/Profesores';
import Alumnos from './pages/Alumnos';
import Materias from './pages/Materias';
import RegistroAlumn from './pages/RegistroAlumn';
import RegistroProf from './pages/RegistroProf';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='profesores' element={<Profesores />} />
        <Route path='alumnos' element={<Alumnos />} />
        <Route path='materias' element={<Materias />} />
        <Route path='registroalumn' element={<RegistroAlumn />} />
        <Route path='registroprof' element={<RegistroProf />} />
      </Routes>
    </div>
  );
}

export default App;
