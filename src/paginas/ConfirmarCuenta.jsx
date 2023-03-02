import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from '../components/Alerta';
import axios from "axios";
import clienteAxios from "../config/axios";

const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});

  const params = useParams();
  const { id } = params;

  useEffect(() => {

    const confirmarCuenta = async () => {
      try {
        const url = `/usuario/confirmar/${id}`;
        //console.log(url)
        const { data } = await clienteAxios(url);
        //console.log(data)
        setCuentaConfirmada(true);
        setAlerta({
          msg: data.msg
        });
        return
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        });
      }
      setCargando(false);
    }
    confirmarCuenta();
  }, [])

  return (
    <>
      <div className="py-40">
        <h1 className="text-white font-black text-6xl">Confirma tu Cuenta y Comienza a Administra tu <span className="text-lime-400">Página</span> </h1>
      </div>

      <div className='py-10 my-20 md:mt-5 shadow-lg px-5  rounded-xl bg-white'>
        {!cargando &&
          <Alerta
            alerta={alerta}
          />}
        {cuentaConfirmada && (
          <Link
            className='block text-center my-5 text-gray-500'
            to="/usuario">Iniciar Sesión
          </Link>
        )}
      </div>
    </>
  )
}

export default ConfirmarCuenta