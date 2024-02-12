import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PaginaBase from './pages/PaginaBase';
import PaginaBaseFormulario from './pages/PaginaBaseFormulario';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import PrivateRoute from './utils/PrivateRoute';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route element={<PrivateRoute />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<PaginaBaseFormulario />}>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;