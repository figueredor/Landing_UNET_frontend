import { useState, useEffect } from "react";
import Alerta from "./Alerta";
import useAspirantes from "../hooks/useAspirantes";

const FormularioAdminPreRegistro = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [pais, setPais] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [id, setId] = useState(null);
    const [condicion, setCondicion] = useState('');
    const [trimestreInicio, setTrimestreInicio] = useState('');

    const [alerta, setAlerta] = useState({});

    const { guardarAspirante, aspirante, mostrarPreregistro } = useAspirantes();
    console.log(aspirante)

    useEffect(() => {
        if (aspirante?.nombre) {
            setNombre(aspirante.nombre)
            setEmail(aspirante.email)
            setPais(aspirante.pais)
            setTelefono(aspirante.telefono)
            setMensaje(aspirante.mensaje)
            setCondicion(aspirante.condicion)
            setTrimestreInicio(aspirante.trimestreInicio)
            setId(aspirante._id)
            

        }
    }, [aspirante]);



    const handleSubmit = e => {
        e.preventDefault();
        //console.log(nombre, email, telefono, pais)

        if ([nombre, email, telefono, pais].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return;
        }

        guardarAspirante({ nombre, email, telefono, pais, mensaje, condicion, trimestreInicio, id })

        setAlerta({
            msg: "Guardado Correctamente"
        });
        setNombre('');
        setEmail('');
        setTelefono('');
        setPais('');
        setMensaje('');
        setCondicion('');
        setTrimestreInicio('');
        setId('');
        
    }

    const { msg } = alerta;

    return (
        <>
            <h2 className="font-black text-3 text-center text-3xl text-white pb-5">Añada Información de tus  {''}
                <span className="text-lime-400 font-bold">Aspirantes</span></h2>

            <form
                className='bg-white py-5 px-5 mb-5 lg:mb-5 shadow-md rounded-md'
                onSubmit={handleSubmit}
            >
                <div className='mb-3'>
                    <label
                        htmlFor='nombreA'
                        className='text-gray-700 uppercase font-bold'
                    >Nombre y Apellido</label>
                    <input
                        id='nombreA'
                        type="text"
                        placeholder='Antonio José Ramírez Castro'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label
                        htmlFor='correoA'
                        className='text-gray-700 uppercase font-bold'
                    >Correo</label>
                    <input
                        id='correoA'
                        type="email"
                        placeholder='correo@correo.com'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label
                        htmlFor='telefonoA'
                        className='text-gray-700 uppercase font-bold'
                    >Teléfono</label>
                    <input
                        id='telefonoA'
                        type="text"
                        placeholder='Su número de teléfono'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={telefono}
                        onChange={e => setTelefono(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label
                        htmlFor='paisA'
                        className='text-gray-700 uppercase font-bold'
                    >País de Residencia</label>
                    <input
                        id='paisA'
                        type="text"
                        placeholder='Su país de residencia'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={pais}
                        onChange={e => setPais(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label
                        htmlFor='condicionA'
                        className='text-gray-700 uppercase font-bold'
                    >Condición Actual (Preregistro, Preinscrito o Inscrito)</label>
                    <input
                        id='condicionA'
                        type="text"
                        placeholder='Preregistro, Preinscrito o Inscrito'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={condicion}
                        onChange={e => setCondicion(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label
                        htmlFor='trimestreA'
                        className='text-gray-700 uppercase font-bold'
                    >Trimestre de Inicio</label>
                    <input
                        id='trimestreA'
                        type="text"
                        placeholder='2023-A'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={trimestreInicio}
                        onChange={e => setTrimestreInicio(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label
                        htmlFor='mensajeA'
                        className='text-gray-700 uppercase font-bold'
                    >Mensaje</label>
                    <textarea
                        id='mensajeA'
                        placeholder='¿Deseas hacer una consulta?'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={mensaje}
                        onChange={e => setMensaje(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className='bg-blue-600 w-full p-3 text-white uppercase font-bold hover:bg-blue-700 cursor-pointer transition-colors'
                    value= { id ? "Guardar Cambios" : "Agregar Aspirante"} 
                />

            </form>
            {msg && <Alerta alerta={alerta} />}

            <div className="flex justify-between gap-2 py-3 text-sm">
            

            <div>
              <button
                type='button'
                className="py-2 px-10 bg-green-600 hover:bg-green-700 text-white uppercase font-bold rounded-lg"
                onClick={mostrarPreregistro}
              >Pre-Registros</button>
            </div>

            <div>
              <button
                type='button'
                className="py-2 px-10 bg-green-600 hover:bg-green-700 text-white uppercase font-bold rounded-lg"
                
              >Pre-Inscritos</button>
            </div>

            <div>
              <button
                type='button'
                className="py-2 px-10 bg-green-600 hover:bg-green-700 text-white uppercase font-bold rounded-lg"
                
              >Inscritos</button>
            </div>


          </div>


        </>
    )
}

export default FormularioAdminPreRegistro;