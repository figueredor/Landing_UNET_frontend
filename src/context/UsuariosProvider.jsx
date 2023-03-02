import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/axios";

const UsuariosContext = createContext();

export const UsuariosProvider = ({children}) => {

    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState({});

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
    }, []);

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

    };

    const setEdicionUsuario = (usuario) => {
        setUsuario(usuario)
        //console.log(usuario)
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
        <UsuariosContext.Provider
            value={{
                usuarios,
                usuario,
                guardarUsuario,
                setEdicionUsuario,
                eliminarUsuario
            }}
        >
            {children}
        </UsuariosContext.Provider>
    )
}
export default UsuariosContext;