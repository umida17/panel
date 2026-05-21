import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
     <div className='sidebar' style={{ padding: '20px', height: '100%' }}>
      <div className='sidebar-cantainer'>

         <h1 className='logo' style={{ 
          fontSize: '64px', 
          fontWeight: 'bold', 
          marginBottom: '30px',
          color: '#ec38da',
          textAlign: 'center'
        }}>
          Logo
        </h1>

         <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          
          <li style={{ marginBottom: '15px' }}>
             <Link to="/Contact" style={{ 
              color: '#a3a6b7', 
              textDecoration: 'none',
              fontSize: '16px',
              display: 'block',
              padding: '10px',
              borderRadius: '6px'
            }}>
              Contact Pages
            </Link>
          </li>

          <li style={{ marginBottom: '15px' }}>
             <Link to="/Students" style={{ 
              color: '#a3a6b7', 
              textDecoration: 'none',
              fontSize: '16px',
              display: 'block',
              padding: '10px',
              borderRadius: '6px'
            }}>
              Students Pages
            </Link>
          </li>

          <li style={{ marginBottom: '15px' }}>
             <Link to="/Teachers" style={{ 
              color: '#a3a6b7', 
              textDecoration: 'none',
              fontSize: '16px',
              display: 'block',
              padding: '10px',
              borderRadius: '6px'
            }}>
              Teachers Pages
            </Link>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Sidebar