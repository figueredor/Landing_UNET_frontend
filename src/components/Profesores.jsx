import useProfesores from "../hooks/useProfesores";

const Profesores = ({ profesor }) => {

    const { setEdicionProfesor, eliminarProfesor } = useProfesores();

    const { nombre, email, profesion, especializacion, maestria, doctorado, experiencia, materia, _id, imagen } = profesor;

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <div className="my-2 mx-auto w-[50%] ">
                <img src={imagen} className="block w-full  rounded-full " />
            </div>
            <div>
                <p className="font-bold uppercase text-gray-500">Nombre Completo: <span className="font-normal normal-case text-black">{nombre}</span></p>

                <p className="font-bold uppercase text-gray-500">Profesión: <span className="font-normal normal-case text-black">{profesion}</span></p>

                <p className="font-bold uppercase text-gray-500">Post-grado</p>
                <p className="font-bold uppercase text-gray-500">Especialización: <span className="font-normal normal-case text-black">{especializacion} </span></p>
                <p className="font-bold uppercase text-gray-500">Maestría: <span className="font-normal normal-case text-black">{maestria} </span></p>
                <p className="font-bold uppercase text-gray-500">Doctorado: <span className="font-normal normal-case text-black">{doctorado} </span></p>

                <p className="font-bold uppercase text-gray-500">Experiencia: <span className="font-normal normal-case text-black">{experiencia}</span></p>

                <p className="font-bold uppercase text-gray-500">Unidad Curricular(es): <span className="font-normal normal-case text-black">{materia}</span></p>

                <p className="font-bold uppercase text-gray-500">Correo: <span className="font-normal normal-case text-black">{email}</span></p>
            </div>

            <div className="flex justify-between my-5">
                <button
                    type='button'
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
                    onClick={() => setEdicionProfesor(profesor)}
                >Editar</button>

                <button
                    type='button'
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                    onClick={() => eliminarProfesor(_id)}
                >Eliminar</button>

            </div>
        </div>
    )
}

export default Profesores