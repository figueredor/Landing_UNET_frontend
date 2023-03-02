import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const HeaderAdmin = () => {

  const { cerrarSesion } = useAuth();
  return (
    <header className="py-10 bg-black">
      <div className="container flex flex-col lg:flex-row justify-between items-center">
        <h1 className='text-white font-bold text-center text-2xl'>Postgrado - Administrador de <span className="text-lime-400 font-black">Página</span></h1>


        <nav className="flex flex-wrap items-center lg:flex-row gap-4 mt-5 lg:mt-0">
          <Link to="/admin/profesores" className="text-white text-sm uppercase font-bold">Profesores</Link>
          <Link to="/admin/aspirantes" className="text-white text-sm uppercase font-bold">Estudiantes</Link>
          <Link to="/admin/usuarios" className="text-white text-sm uppercase font-bold">Usuarios</Link>
          <Link to="/admin" className="text-white text-sm uppercase font-bold">Admin</Link>
          <Link to="/" className="text-white text-sm uppercase font-bold">Página Principall</Link>
          <button
            type="button"
            className="text-white text-sm uppercase font-bold"
            onClick={cerrarSesion}
          >Cerrar Sesión</button>
        </nav>
      </div>
    </header>
  )
}

export default HeaderAdmin