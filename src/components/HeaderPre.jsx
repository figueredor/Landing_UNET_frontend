import React from 'react'
import logoUnet from "../assets/img/logo-unet-blanco-200.png";
import logoPostgrado from "../assets/img/logo-postgrado-blanco-200.png";

const HeaderPre = () => {
  return (
    <header className=" bg-black py-5 px-5">
      <div className="container " >
        <div className="grid grid-cols-12 justify-center items-center gap-2  ">
          <div className="justify-self-center col-span-2">
            <img src={logoUnet}
              className="w-20"
            />
          </div>
          <div className=" col-span-8 ">
            <h2 className='font-black text-3xl text-center uppercase text-white'>
              Maestría en Gerencia de Empresas Agrícolas
            </h2>
            <p className='font-black text-xl text-center text-white'>Pre-registro de Aspirantes</p>
          </div>
          <div className=" justify-justify-self-center col-span-2 ">
          <img src={logoPostgrado}
            className="w-20"
          />
        </div>
        </div>


        
      </div>
    </header>
  )
}

export default HeaderPre