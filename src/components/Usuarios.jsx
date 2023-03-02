import useUsuarios from '../hooks/useUsuarios';


const Usuarios = ({ usuario }) => {

    const { setEdicionUsuario , eliminarUsuario } = useUsuarios();

    const { nombre, email, rol, confirmado, updatedAt, createdAt, _id} = usuario;

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold uppercase text-gray-500">Nombre Completo: <span className="font-normal normal-case text-black">{nombre}</span></p>

            <p className="font-bold uppercase text-gray-500">Correo: <span className="font-normal normal-case text-black">{email}</span></p>

            <p className="font-bold uppercase text-gray-500">Rol: <span className="font-normal normal-case text-black">{rol}</span></p>


            <p className="font-bold uppercase text-gray-500">Confirmado <span className="font-normal normal-case text-black">{confirmado ? 'Si' : 'No'} </span></p>

            <p className="font-bold uppercase text-gray-500">Fecha de Creación: <span className="font-normal normal-case text-black">{createdAt}</span></p>
            <p className="font-bold uppercase text-gray-500">Ultima Actualización: <span className="font-normal normal-case text-black">{updatedAt}</span></p>

            <div className="flex justify-between my-5">
                <button
                    type='button'
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
                    onClick={() => setEdicionUsuario(usuario)}
                >Editar</button>

                <button
                    type='button'
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                    onClick={() => eliminarUsuario(_id)}
                >Eliminar</button>

            </div>
        </div>
    )
}

export default Usuarios