import {  createContext, useEffect, useState } from "react";
import clienteAxios from "../config/axios";

const ProfesoresContext = createContext();

export const ProfesoresProvider = ({children}) => {
    const [profesores, setProfesores] = useState([]);
    const [profesor, setProfesor] = useState('');

    

    useEffect(() => {

        const obtenerProfesores = async () => {
            try {
                const token = localStorage.getItem('token');
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                    
                }

                const { data } = await clienteAxios('/profesores', config);
                //console.log(data)
                setProfesores(data)

            } catch (error) {
                console.log(error)
            }

        }
        obtenerProfesores();
    }, [])

    const guardarProfesor = async (profesor) => {
        
        const token = localStorage.getItem('token');
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

        if(profesor.id) {
            //console.log(profesor)
            try {
                const { data } = await clienteAxios.put(`/profesores/${profesor.id}`, profesor, config);

                const profesorActualizado = profesores.map( profesorState => profesorState._id === data._id ? data : profesorState);
                //console.log(profesorActualizado)
                setProfesores(profesorActualizado);

            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                
                const { data } = await clienteAxios.post("/profesores", profesor, config);
                console.log(data)
                const { createdAt, updatedAt
                    , __v, ...profesorAlmacenado} = data;
    
                setProfesores([profesorAlmacenado, ...profesores])
            } catch (error) {
                console.log(error.response.data.msg)
            }
        }

        
        
    }

    const setEdicionProfesor = (profesor) => {
        setProfesor(profesor)
    }

    const eliminarProfesor = async id => {

        const confirmar = confirm('¿Confirmas que deseas eliminar el profesor?');

        if(confirmar){
            
            try {
                const token = localStorage.getItem('token');
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.delete(`/profesores/${id}`, config);

            const profesoresActualizado = profesores.filter(profesoresState => profesoresState._id !== id);

            setProfesores(profesoresActualizado);
            
            } catch (error) {
                console.log(error);
            }
        }
        
    }

    


    return(
        <ProfesoresContext.Provider
            value={{
                profesores,
                guardarProfesor,
                setEdicionProfesor, 
                profesor,
                eliminarProfesor
            }}
        >
            {children}
        </ProfesoresContext.Provider>
    )
}


export default ProfesoresContext;
