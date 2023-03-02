import { Outlet, useNavigate } from 'react-router-dom';
//import useAuth from "../hooks/useAuth";
import FooterAdmin from '../components/FooterAdmin';
import HeaderAdmin from '../components/HeaderAdmin';


const RutaProtegida = () => {
    //const { auth, cargando } = useAuth();
    const navigate = useNavigate();
    //console.log(auth)
    //console.log(cargando)

    //if (cargando) return 'cargando...'
    return (
        <>
            <div className="bg-slate-900">
                <HeaderAdmin />
                
                    <main className="container mt-10 bg-slate-900">
                        <Outlet />
                    </main>
                
                <FooterAdmin />
            </div>
        </>
    )
}

export default RutaProtegida;