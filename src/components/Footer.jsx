

const Footer = () => {
    return (
        <>
            <footer className='bg-black '>
                <h2 className='font-black text-xl text-center uppercase text-white pt-10 py-5'>Maestría en Gerencia de Empresas Agrícolas</h2>
                <div className="container mx-auto px-20 ">
                    <nav className='text-center md:flex md:justify-between pb-10'>
                        <div>
                            <a href="http://www.unet.edu.ve/" target="_blank" className='text-white '>Universidad Nacional Experimental del Tachira</a>
                        </div>

                        <div>
                            <a href="https://aulavirtual.unet.edu.ve/" target="_blank" className='text-white '>Plataforma Moodle</a>
                        </div>

                        <div>
                            <a href="http://postgrado.unet.edu.ve/" target="_blank" className='text-white'>Decanato de Postgrado</a>
                        </div>
                    </nav>
                </div>
            </footer>
        </>
    )
}

export default Footer