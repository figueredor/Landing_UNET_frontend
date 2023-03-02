import useAspirantes from "../hooks/useAspirantes";
import MostrarAspirantes from "./MostrarAspirantes";
import { useState } from "react";
import clienteAxios from "../config/axios";




const ListadoAspirantes = () => {
  const [mostrarTodos, setMostrarTodos] = useState({});
  //const [mostrarPreinscritos, setMostrarPreinscritos] = useState({});
  //const [mostrarPreregistros, setMostrarPreregistros] = useState({});
  const { aspirantes } = useAspirantes();
  //console.log(aspirantes)
  

  
  const handleMostrarPreregistros = async (e) => {
    e.preventDefault();
    console.log('Mostrando Pre-Registros');

    try {
      const token = localStorage.getItem('token');
      if (!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }

      }
      const condicion = "Preregistro"
      const { data } = await clienteAxios.get('/aspirante/preregistros',  config, {condicion: condicion});
      setMostrarPreregistros(data)
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }
  

  const handleMostrarTodos = async (e) => {
    e.preventDefault();
    console.log('Mostrando todos');

    try {
      const token = localStorage.getItem('token');
      if (!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }

      }
      
      const { data } = await clienteAxios.get('/aspirante',  config);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleMostrarPreinscritos = async e => {
    e.preventDefault();
    console.log('Mostrando Pre-Inscritos');

    try {
      const token = localStorage.getItem('token');
      if (!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }

      }
      const condicion = "Preinscrito"
      const { data } = await clienteAxios.get('/aspirante/preinscritos',  config, {condicion: condicion});
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleMostrarInscritos = async e => {
    e.preventDefault();
    console.log('Mostrando Inscritos');

    try {
      const token = localStorage.getItem('token');
      if (!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }

      }
      const condicion = "Inscrito"
      const { data } = await clienteAxios.get('/aspirante/inscritos',  config, {condicion: condicion});
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>

      {aspirantes.length ? (
        <>
          <h2 className="font-black text-3 text-center text-3xl text-white">Administra tus {''} <span className="text-lime-400 font-bold"> Aspirantes</span></h2>

          <p className="text-white text-xl text-center">
            Mostrando Todos Los Estudiantes
          </p>

          

          {aspirantes.map(aspirante => (
            <MostrarAspirantes
              setMostrarPreregistros
              key={aspirante._id}
              aspirante={aspirante}
            />
          ))}
        </>
      ) :
        (
          <>
            <h2 className="font-black text-3 text-center text-3xl text-white">No hay Aspirantes</h2>
          </>
        )}

    </>
  )
}

export default ListadoAspirantes;