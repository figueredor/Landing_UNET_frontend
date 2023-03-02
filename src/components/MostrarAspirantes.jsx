import useAspirantes from "../hooks/useAspirantes";

const MostrarAspirantes = ({ aspirante }) => {

    const { setEdicionAspirante, eliminarAspirante } = useAspirantes();

    const { nombre, email, telefono, pais, mensaje, condicion, trimestreInicio, createdAt, updatedAt, _id } = aspirante
    return (
        <>
            
            <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold uppercase text-gray-500">Nombre y Apellidos: <span className="font-normal normal-case text-black">{nombre}</span></p>

                <p className="font-bold uppercase text-gray-500">Correo Electrónico: <span className="font-normal normal-case text-black">{email}</span></p>

                <p className="font-bold uppercase text-gray-500">Teléfono: <span className="font-normal normal-case text-black">{telefono} </span></p>

                <p className="font-bold uppercase text-gray-500">País de Residencia: <span className="font-normal normal-case text-black">{pais} </span></p>

                <p className="font-bold uppercase text-gray-500">Condición: <span className="font-normal normal-case text-black">{condicion} </span></p>

                <p className="font-bold uppercase text-gray-500">Trimestre de Inicio: <span className="font-normal normal-case text-black">{trimestreInicio} </span></p>

                <p className="font-bold uppercase text-gray-500">Mensaje: <span className="font-normal normal-case text-black">{mensaje} </span></p>

                <p className="font-bold uppercase text-gray-500">fecha de Registro: <span className="font-normal normal-case text-black">{createdAt} </span></p>

                <p className="font-bold uppercase text-gray-500">Última Actualización: <span className="font-normal normal-case text-black">{updatedAt} </span></p>

                <div className="flex justify-between my-5">
                    <button
                        type='button'
                        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
                        onClick={() => setEdicionAspirante(aspirante)}
                    >Editar</button>

                    <button
                        type='button'
                        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                        onClick={() => eliminarAspirante(_id)}
                    >Eliminar</button>
                </div>
            </div>
        </>
    )
}

export default MostrarAspirantes