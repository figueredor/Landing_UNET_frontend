import { useState, createContext, useEffect } from "react";
import clienteAxios from '../config/axios';

const AspirantesContext = createContext();

export const AspirantesProvider = ({ children }) => {
    const [aspirantes, setAspirantes] = useState([]);
    const [aspirante, setAspirante] = useState([]);


    useEffect(() => {
        const obtenerAspirantes = async () => {


            try {
                const token = localStorage.getItem('token');
                if (!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }

                }
                const { data } = await clienteAxios('/aspirante', config);
                //console.log(data)
                setAspirantes(data)
            } catch (error) {
                console.log(error);
            }
        }
        obtenerAspirantes();
    }, []);


    const guardarAspirante = async (aspirante) => {
        console.log(aspirante)
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }


        if (aspirante.id) {
            try {
                const { data } = await clienteAxios.put(`/aspirante/${aspirante.id}`, aspirante, config);

                const aspiranteActualizado = aspirantes.map(aspiranteState => aspiranteState._id === data._id ? data : aspiranteState);
                //console.log(aspiranteActualizado)
                setAspirantes(aspiranteActualizado);

            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                console.log(data)
                const { data } = await clienteAxios.post("/aspirante", aspirante, config);

                const { createdAt, updatedAt
                    , __v, ...aspiranteAlmacenado } = data;

                setAspirantes([aspiranteAlmacenado, ...aspirantes])
            } catch (error) {
                console.log(error.response.data.msg)
            }
        }

    }

    const setEdicionAspirante = (aspirante) => {
        setAspirante(aspirante)
    }

    const eliminarAspirante = async id => {

        const confirmar = confirm('¿Confirmas que deseas eliminar el aspirante?');

        if (confirmar) {

            try {
                const token = localStorage.getItem('token');
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const { data } = await clienteAxios.delete(`/aspirante/${id}`, config);

                const aspirantesActualizado = aspirante.filter(aspirantesState => aspirantesState._id !== id);

                setAspirantes(aspirantesActualizado);

            } catch (error) {
                console.log(error);
            }
        }

        /*
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
                const { data } = await clienteAxios.get('/aspirante/preinscritos', config, { condicion: condicion });
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        }

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
                const { data } = await clienteAxios.get('/aspirante/preregistros', config, { condicion: condicion });
                //setMostrarPreregistros(data)
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        }
        */
    }

    const mostrarPreregistros = async e => {
        e.preventDefault()
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
            //setMostrarPreregistros(data)
            console.log(data)
          } catch (error) {
            console.log(error);
          }
    }


    return (
        <AspirantesContext.Provider
            value={{
                aspirantes,
                setAspirantes,
                aspirante,
                guardarAspirante,
                setEdicionAspirante,
                eliminarAspirante,
                mostrarPreregistros
                

            }}
        >
            {children}
        </AspirantesContext.Provider>
    )

}

export default AspirantesContext;