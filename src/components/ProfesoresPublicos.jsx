
import useProfesores from "../hooks/useProfesores";


const ProfesoresPublicos = ({profesor}) => {
    const { nombre, email, profesion, especializacion, maestria, doctorado, experiencia, materia, _id, imagen } = profesor;
  return (
    <>
        
        <div className="bg-white m-4 rounded-lg my-5">
        <div className="my-2 mx-auto w-[50%] ">
            <img src={imagen} className="block w-full  rounded-full " />
        </div>
        <div className="py-5">
            <p className="text-center p-2 font-bold text-xl">{nombre}</p>

            <p className=" p-2 font-bold">Unidad Curricular:</p>
            <p className="px-2 text-gray-900">{materia}</p>

            <p className=" p-2 font-bold">Profesión:</p>
            <p className="px-2 text-gray-700">{profesion}</p>

            <p className=" p-2 font-bold">Postgrado:</p>
            <p className="px-2 text-gray-700">{maestria}</p>

            <p className=" p-2 font-bold">Correo:</p>
            <p className="px-2 text-gray-700 text-sm">{email}</p>
        </div>
        </div>
        
   
    </>
  )
}

export default ProfesoresPublicos