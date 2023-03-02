import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Inicio from '../paginas/Inicio'

const PageLayout = () => {
  return (
    <div className="bg-slate-900">
    <Header />
      <Outlet />

    <Footer />
    
    

    
    </div>


  )
}

export default PageLayout