
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminLayout from './layout/AdminLayout';
import AuthLayout from './layout/AuthLayout';
import Profesores from './paginas/Profesores';
import Programa from './paginas/Programa'
import PreRegistro from './paginas/PreRegistro';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />} >
          <Route index element={<PreRegistro />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
