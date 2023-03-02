import {  createContext, useEffect, useState } from "react";
import clienteAxios from "../config/axios";

const ProfesoresContext = createContext();

export const ProfesoresProvider = ({children}) => {
    const [profesores, setProfesores] = useState([]);
    const [profesor, setProfesor] = useState('');

    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState({});


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

    useEffect(() => {
        const obtenerUsuarios = async () => {

            try {
                const token = localStorage.getItem('token');
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                    
                }

                const { data } = await clienteAxios('/usuario', config);
                //console.log(data)
                setUsuarios(data)

            } catch (error) {
                console.log(error)
            }

        }
        obtenerUsuarios();
    }, [])

    const guardarUsuario = async (usuario) => {
        //console.log(usuario)
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        if(usuario.id) {
            try {
                const { data } = await clienteAxios.put(`/usuario/${usuario.id}`, usuario, config);

                const usuarioActualizado = usuarios.map( usuarioState => usuarioState._id === data._id ? data : usuarioState);
                //console.log(profesorActualizado)
                setUsuarios(usuarioActualizado);

            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                
                const { data } = await clienteAxios.post("/usuario", usuario, config);
    
                const { createdAt, updatedAt
                    , __v, ...usuarioAlmacenado} = data;
    
                setProfesores([usuarioAlmacenado, ...usuarios])
            } catch (error) {
                console.log(error.response.data.msg)
            }
        }

    }

    
    const setEdicionUsuario = (usuario) => {
        setUsuario(usuario)
        //console.log(usuario)
    }

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
    
                const { createdAt, updatedAt
                    , __v, ...profesorAlmacenado} = data;
    
                setProfesores([profesorAlmacenado, ...profesores])
            } catch (error) {
                console.log(error.response.data.msg)
            }
        }

        
        
    }

    const setEdicion = (profesor) => {
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

    const eliminarUsuario = async id =>{
        console.log(id)
        const confirmar = confirm('¿Confirmas que deseas eliminar el registro?');

        if(confirmar){
            
            try {
                const token = localStorage.getItem('token');
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.delete(`/usuario/${id}`, config);

            const usuariosActualizado = usuarios.filter(usuariosState => usuariosState._id !== id);

            setUsuarios(usuariosActualizado);
            
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
                setEdicion, 
                profesor,
                eliminarProfesor,
                usuarios,
                guardarUsuario,
                setEdicionUsuario,
                usuario,
                eliminarUsuario
            }}
        >
            {children}
        </ProfesoresContext.Provider>
    )
}


export default ProfesoresContext;
