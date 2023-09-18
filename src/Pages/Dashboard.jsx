import React from 'react'
import NavDashboard from '../Components/NavDashboard'
import ListaDePanes from '../Components/ListaPanes'
import "../Styles/ProductoMiliPan.css"

const Dashboard = () => {
  return (
    <div className='w-screen h-screen bg-[#966c38]'>
        <NavDashboard/>
        <ListaDePanes/>
    </div>
  )
}

export default Dashboard
