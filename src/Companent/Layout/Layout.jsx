import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Layout = () => {
   const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className='dashboard-container' style={{ display: 'flex', minHeight: '100vh' }}>
      
      <aside className='sidebar-container' style={{ width: '260px', backgroundColor: '#1e1e2f' }}>
        <Sidebar />
      </aside>

      <div className='main-content' style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
         <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <main style={{ padding: '20px', flex: 1 }}>
           <Outlet context={{ searchQuery }} />
        </main>

      </div>

    </div>
  )
}

export default Layout