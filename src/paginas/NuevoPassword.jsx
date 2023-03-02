import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";


const NuevoPassword = () => {
  const [password, setPassword] = useState('');
  const [alerta, setAlerta] = useState({});
  const [tokenValido, setTokenValido] = useState(false);
  const [passwordModificado, setPasswordModificado] = useState(false);

  const params = useParams();
  //console.log(params);
  const { token } = params;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/usuario/olvide-password/${token}`);
        setAlerta({
          msg: 'Coloca tu Nuevo Password', error: false
        })
        setTokenValido(true);

      } catch (error) {
        setAlerta({
          msg: 'Hubo un error con el enlace',
          error: true
        })
      }

    }
    comprobarToken();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setAlerta({
        msg: "El Password debe ser mínimo de 6 caracteres",
        error: true
      })
      return
    }

    try {
      const url = `/usuario/olvide-password/${token}`;
      const { data } = await clienteAxios.post(url, { password })
      setPasswordModificado(true);

      setAlerta({
        msg: data.msg
      })
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
      <div className="py-40">
        <h1 className="text-white font-black text-6xl">Restablece tu Password y no Pierdas Acceso a tu {" "}<span className="text-lime-400">Página y Estudiantes</span> </h1>
      </div>

      <div className='my-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
        {msg && <Alerta
          alerta={alerta}
        />}
        {tokenValido && (
          <>
            <form onSubmit={handleSubmit}>

              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Nuevo Password
                </label>
                <input
                  type="password"
                  placeholder="Tu nuevo password"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <input
                type="submit"
                value="Guardar Nuevo Password"
                className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
              />
            </form>


          </>
        )}
        {passwordModificado &&
          <Link
            className='block text-center my-5 text-gray-500'
            to="/usuario">Iniciar Sesión
          </Link>
        }

      </div>
    </>
  )
}

export default NuevoPassword;