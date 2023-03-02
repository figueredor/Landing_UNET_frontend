import useUsuarios from '../hooks/useUsuarios';
import Usuarios from "./Usuarios";

const ListadoUsuarios = () => {

  const { usuarios } = useUsuarios();

  return (
    <>
      { usuarios.length ? 
        (
        <>
          <h2 className="text-white text-3xl text-center">Listado de Usuarios</h2>
          <p className="text-xl mt-5 mb-10 text-center text-white">Administra tus {' '}
          <span className="text-lime-400 font-bold">Usuarios</span></p>

          { usuarios.map( usuario =>(
            <Usuarios 
              key={usuario._id}
              usuario={usuario}
            />
          ))}
        </>
      ) : 
      (
        <>
          <h2 className="font-white text-3xl text-center">No hay Usuarios</h2>
        </>
      )}
    </>
  )
}

export default ListadoUsuarios