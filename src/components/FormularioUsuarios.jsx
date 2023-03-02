import { useState, useEffect } from 'react';
import Alerta from './Alerta';
import useUsuarios from '../hooks/useUsuarios';

const FormularioUsuarios = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [rol, setRol] = useState('');
    const [confirmado, setConfirmado] = useState('');
    const [id, setId] = useState(null);

    const [alerta, setAlerta] = useState({});

    const { guardarUsuario, usuario } = useUsuarios();
    //console.log(usuario)

    useEffect(() => {
        if (usuario?.nombre) {
            setNombre(usuario.nombre);
            setEmail(usuario.email);
            setRol(usuario.rol);
            setConfirmado(usuario.confirmado);
            setId(usuario._id)
        }
    }, [usuario])

    const handleSubmit = e => {
        e.preventDefault();
        if ([nombre, email, rol].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return;
        }

        guardarUsuario({ nombre, email, rol, id });
        setAlerta({
            msg: 'Guardado Correctamente'
        });
        setNombre('');
        setEmail('');
        setRol('');
        setConfirmado('')
    }

    const { msg } = alerta;

    return (
        <>

            <h2 className="font-black text-3 text-center text-3xl text-white pb-5">Añada Información de tus  {''}
                <span className="text-lime-400 font-bold">Usuarios</span></h2>
            <div className=' md:mt-5 md:px-10 shadow-lg px-10 py-10 rounded-xl bg-white'>

                {msg && <Alerta
                    alerta={alerta}
                />}

                <form
                    onSubmit={handleSubmit}
                >
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Nombre
                        </label>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Email
                        </label>
                        <input
                            type="emai"
                            placeholder="Email del Registro"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Rol
                        </label>
                        <input
                            type="text"
                            placeholder="Rol del usuario"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={rol}
                            onChange={e => setRol(e.target.value)}
                        />
                    </div>

                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Confirmado
                        </label>
                        <input
                            type="text"
                            disabled
                            placeholder="Confirmación del usuario"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={confirmado}
                            onChange={e => setConfirmado(e.target.value)}
                        />
                    </div>


                    <input
                        type="submit"
                        value={id ? "Guardar Cambios" : "Crear Cuenta"}
                        className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                    />
                </form>
            </div>
        </>
    )
}

export default FormularioUsuarios