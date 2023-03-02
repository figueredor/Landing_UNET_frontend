import { Outlet } from 'react-router-dom'
import FooterPre from '../components/FooterPre'
import HeaderPre from '../components/HeaderPre.jsx'


const AuthLayout = () => {
    return (
        <>
            <HeaderPre />
            
            <Outlet />
            
            <FooterPre />
        </>
    )
}

export default AuthLayout