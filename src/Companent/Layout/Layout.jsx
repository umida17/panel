import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
const Layout = () => {
  return (
    <div>
      <div className='cards'>
        <Sidebar/>
        <Header/>
      </div>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout
