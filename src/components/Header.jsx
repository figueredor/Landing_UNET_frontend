import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/img/logo-unet-blanco-200.png";
import logoPostgrado from "../assets/img/logo-postgrado-blanco-200.png";

const Header = () => {
    return (
        <>
            <header className="bg-black py-5 ">
                <div className="container " >
                    <div className="grid grid-cols-12 justify-center items-center gap-2 md:grid-cols-12 ">
                        <div className="justify-self-center col-span-2">
                            <Link to={"/"}>
                                <img src={logo}
                                    className="w-20"
                                />
                            </Link>
                        </div>

                        <div className=" col-span-8 md:col-span-3">
                            <h2 className=" font-black uppercase text-white text-center  md:text-start">
                                Maestría en Gerencia de Empresas Agrícolas
                            </h2>
                        </div>

                        <nav className=" text-sm flex flex-col text-center md:col-span-5 md:flex-row  col-span-12 p-2 order-last md:order-none "  >
                            <Link to="/programa" className='text-white p-2 '>Información</Link>
                            <Link to="/profesores" className='text-white  p-2'>Profesores</Link>
                            <Link to="/pre-registro" className='text-white p-2'>Pre-Registro</Link>
                        </nav>

                        <div className=" justify-self-center col-span-2 ">
                            <img src={logoPostgrado}
                                className="w-20"
                            />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;