import { useState } from 'react';
import Alerta from './Alerta';
import clienteAxios from '../config/axios';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [pais, setPais] = useState('');
    const [mensaje, setMensaje] = useState('');

    const [alerta, setAlerta] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();

        if([nombre, email, telefono, pais].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return;
        };

        try {
            
            await clienteAxios.post('/pre-registro', {nombre, email, telefono, pais, mensaje});
            setAlerta({
                msg: 'Aspirante registrado correctamente, revisa tu email',
                error: false
            })
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
            
        }

        setNombre('');
        setTelefono('');
        setEmail('');
        setPais('');
        setMensaje('');
       
    }

    const { msg } = alerta;

    return (
        <>
            <div className="px-5 md:col-span-3">
                <h2 className="text-center text-white font-semibold py-5 uppercase text-4xl"> Pre-Registro </h2>
                <form 
                className='bg-white py-5 px-5 mb-5 lg:mb-5 shadow-md rounded-md'
                onSubmit={handleSubmit}
                >
                    <div className='mb-3'>
                        <label
                            htmlFor='nombre'
                            className='text-gray-700 uppercase font-bold'
                        >Nombre y Apellido</label>
                        <input
                            id='nombre'
                            type="text"
                            placeholder='Antonio José Ramírez Castro'
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                    </div>

                    <div className='mb-5'>
                        <label
                            htmlFor='correo'
                            className='text-gray-700 uppercase font-bold'
                        >Correo</label>
                        <input
                            id='correo'
                            type="email"
                            placeholder='correo@correo.com'
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>


                    <div className='mb-5'>
                        <label
                            htmlFor='telefono'
                            className='text-gray-700 uppercase font-bold'
                        >Teléfono</label>
                        <input
                            id='telefono'
                            type="text"
                            placeholder='Su número de teléfono'
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={telefono}
                            onChange={e => setTelefono(e.target.value)}
                        />
                    </div>

                    <div className='mb-5'>
                        <label
                            htmlFor='pais'
                            className='text-gray-700 uppercase font-bold'
                        >País de Residencia</label>
                        <input
                            id='pais'
                            type="text"
                            placeholder='Su país de residencia'
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={pais}
                            onChange={e => setPais(e.target.value)}
                        />
                    </div>

                    <div className='mb-5'>
                        <label
                            htmlFor='mensaje'
                            className='text-gray-700 uppercase font-bold'
                        >Mensaje</label>
                        <textarea
                            id='mensaje'
                            placeholder='¿Deseas hacer una consulta?'
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={mensaje}
                            onChange={e => setMensaje(e.target.value)}
                        />
                    </div>

                    <input
                        type="submit"
                        className='bg-blue-600 w-full p-3 text-white uppercase font-bold hover:bg-blue-700 cursor-pointer transition-colors'

                    />

                </form>
                {msg && <Alerta alerta={alerta} />}

            </div>
        </>
    )
}

export default Formulario;