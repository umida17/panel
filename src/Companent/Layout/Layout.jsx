import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Layout = () => {
  return (
     <div 
      className='dashboard-container' 
      style={{ 
        display: 'flex', 
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        fontFamily: 'sans-serif'
      }}
    >
      
       <aside 
        className='sidebar-container'
        style={{
          width: '290px',
          backgroundColor: '#1c1e27',
          color: '#ffffff',
          minHeight: '100vh',
          boxShadow: '2px 0 5px rgba(0,0,0,0.05)'
        }}
      >
         <Sidebar />
      </aside>

       <div 
        className='main-content' 
        style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column' 
        }}
      >
        
         <Header />

         <main style={{ padding: '20px', flex: 1 }}>
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default Layout