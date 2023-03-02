import { useState, useEffect} from 'react';
import Alerta from './Alerta';
import useProfesores from '../hooks/useProfesores';

const FormularioProfesores = () => {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [profesion, setProfesion] = useState('');
  const [especializacion, setEspecializacion] = useState('');
  const [maestria, setMaestria] = useState('');
  const [doctorado, setDoctorado] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [materia, setMateria] = useState('');
  const [imagen, setImagen] = useState(null);
  const [id, setId] = useState(null);
  //const [nombreArchivo, setNombreArchivo] = useState('')

  const [alerta, setAlerta] = useState({});

  const { guardarProfesor, profesor } = useProfesores();
  //console.log(profesor)

  useEffect(() => {
    if(profesor?.nombre) {
      setNombre(profesor.nombre)
      setEmail(profesor.email)
      setProfesion(profesor.profesion)
      setEspecializacion(profesor.especializacion)
      setMaestria(profesor.maestria)
      setDoctorado(profesor.doctorado)
      setExperiencia(profesor.experiencia)
      setMateria(profesor.materia)
      setId(profesor._id)
      setImagen(profesor.imagen)
    }
  }, [profesor])

  /*
  const selectedHandler = e => {
    //console.log((e.target.files[0]))
    setImagen(e.target.files[0])
    
  }
  */
 const fileSelectHandle = (e) => {
  setImagen(e.target.files[0]);
  //nombreArchivo = e.target.files[0].name;
  console.log(e.target.files[0])
 }

  const handleSubmit = e => {
    e.preventDefault();
   
    //console.log(imagen)
    //console.log(imagenSeleccionada)

    // Dar formato a la imagen antes de envíar
    /*
    const imagen = new FormData();
    imagen.append('image', imagen);
    console.log(imagen)
    //enviar al servidor
    */
    
    
    

    if([nombre, email, profesion, maestria,  experiencia, materia].includes('')) {
      setAlerta({
        msg : 'Todos los campos son obligatorios',
        error: true
      })
      return;
    }
    
    guardarProfesor({nombre, email, profesion, maestria,  experiencia, materia, especializacion, doctorado, id,  imagen});
    //console.log(guardarProfesor)
    setAlerta({
      msg: "Guardado Correctamente"
    });
    setNombre('');
    setEmail('');
    setProfesion('');
    setEspecializacion('');
    setMaestria('');
    setDoctorado('');
    setMateria('');
    setExperiencia('');
    setId('');
  }

  const { msg } = alerta;

  return (
    <>
    <h2 className="font-black text-3 text-center text-3xl text-white pb-5">Añada Información de tus  {''} 
    <span className="text-lime-400 font-bold">Profesores</span></h2>

    <form
    className="bg-white py-10 px-5 mb-10 lg:mb-8 shadow-sm rounded-md"
    onSubmit={handleSubmit}
    >
      <div className="mb-5">
        <label
          htmlFor='nombre'
          className="text-gray-700 uppercase font-bold"
        >Nombre Completo</label>
        <input 
          id="nombre"
          type="text"
          placeholder='Nombre Completo del Profesor'
          className="border-2 w-full P-2 MT-2 placeholder-gray-400 rounded-md"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
        htmlFor='email'
          className="text-gray-700 uppercase font-bold"
        >Correo</label>
        <input 
          id="correo"
          type="email"
          placeholder='correo@correo.com'
          className="border-2 w-full P-2 MT-2 placeholder-gray-400 rounded-md"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-5 ">
        <label
        htmlFor='profesion'
          className="text-gray-700 uppercase font-bold"
        >Profesión</label>
        <input 
          id="profesion"
          type="text"
          placeholder='Profesiones que posee'
          className="border-2 w-full P-2 MT-2 placeholder-gray-400 rounded-md"
          value={profesion}
          onChange={e => setProfesion(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
        htmlFor='especializacion'
          className="text-gray-700 uppercase font-bold"
        >Especialización</label>
        <input 
          id="especializacion"
          type="text"
          placeholder='Especializaciones que posee'
          className="border-2 w-full P-2 MT-2 placeholder-gray-400 rounded-md"
          value={especializacion}
          onChange={e => setEspecializacion(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
        htmlFor='maestria'
          className="text-gray-700 uppercase font-bold"
        >Maestría</label>
        <input 
          id="maestria"
          type="text"
          placeholder='Maestrías que posee'
          className="border-2 w-full P-2 MT-2 placeholder-gray-400 rounded-md"
          value={maestria}
          onChange={e => setMaestria(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
        htmlFor='doctorado'
          className="text-gray-700 uppercase font-bold"
        >Doctorado</label>
        <input 
          id="doctorado"
          type="text"
          placeholder='Doctorado que posee'
          className="border-2 w-full P-2 MT-2 placeholder-gray-400 rounded-md"
          value={doctorado}
          onChange={e => setDoctorado(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
        htmlFor='experiencia'
          className="text-gray-700 uppercase font-bold"
        >Experiencia</label>
        <input 
          id="experiencia"
          type="text"
          placeholder='Experiencia que posee'
          className="border-2 w-full P-2 MT-2 placeholder-gray-400 rounded-md"
          value={experiencia}
          onChange={e => setExperiencia(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
        htmlFor='materia'
          className="text-gray-700 uppercase font-bold"
        >Unidad Curricular</label>
        <input 
          id="materia"
          type="text"
          placeholder='Unidades Curriculares que imparte'
          className="border-2 w-full P-2 MT-2 placeholder-gray-400 rounded-md"
          value={materia}
          onChange={e => setMateria(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
        htmlFor='imagenF'
          className="text-gray-700 uppercase font-bold"
        >Subir Forografía</label>
        <input 
          id="imagenF"
          type="file"
          accept="image/png, image/jpeg"
          className="border-2 w-full P-2 MT-2 placeholder-gray-400 rounded-md"
          onChange={fileSelectHandle}
        />
      </div>

      <input 
        type="submit"
        className="bg-indigo-600 w-full p-3 text-white uppercase hover:bg-indigo-700 cursor-pointer rounded-md transition-colors"
        value= { id ? "Guardar Cambios" : "Agregar Profesor"} 
      />
    </form>
    {msg && <Alerta
          alerta={alerta}
        />}
    </>
  )
}

export default FormularioProfesores;