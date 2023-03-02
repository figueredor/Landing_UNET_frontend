import { useState } from 'react';
import { Link } from 'react-router-dom';
import Alerta from '../components/Alerta.jsx';
import clienteAxios from '../config/axios.jsx';

const OlvidePassword = () => {
  const [email, setEmail] = useState('');
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async e => {
    e.preventDefault();
    //console.log(email)
    if (email === '') {
      setAlerta({ msg: 'El Email es obligatorio', error: true })
      return
    }

    try {
      
      console.log(email)
      const { data } = await clienteAxios.post('/usuario/olvide-password', { email });
      console.log(data)

      setAlerta({ msg: data.msg  });

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const { msg } = alerta;

  return (
    <>
      <div>
        <h1 className="text-white font-black text-6xl">Recupera tu Acceso y no Pierdas la Administración de tu <span className="text-lime-400">Página</span> </h1>
      </div>
      <div className='my-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>

        {msg && <Alerta
          alerta={alerta}
        />}
        <form
          onSubmit={handleSubmit}
        >
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input
              type="emai"
              placeholder="Email de Registro"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Envíar Instrucciones"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
          />

        </form>

        <nav className='mt-10 lg:flex lg:justify-between'>
          <Link
            className='block text-center my-5 text-gray-500'
            to="/usuario">¿Ya tienes una cuenta? Inicia Sesión</Link>
          <Link
            className='block text-center my-5 text-gray-500'
            to="/usuario/registrar">¿No tienes una cuenta? Registrate</Link>
        </nav>
      </div>
    </>
  )
}

export default OlvidePassword