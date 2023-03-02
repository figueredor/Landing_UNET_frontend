import React from 'react';
import FormularioPreRegistro from '../components/FormularioPre-registro';
import Información from '../components/Información';
import ProgramaMostrar from '../components/ProgramaMostrar';



const PreRegistro = () => {

  return (
    <>
      <div className="bg-slate-900    ">
        <div>
        <div>
        <h1 className="text-center text-5xl font-bold text-lime-400 py-10">Bienvenido!!!</h1>
        </div>

        <ProgramaMostrar/>

        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:block md:w-1/2 lg:w-3/5">
            <Información />
          </div>
          <div className="md:w-1/2 lg:w-2/5">
            <FormularioPreRegistro />
          </div>
        </div>
      </div>
    </>
  )
}

export default PreRegistro