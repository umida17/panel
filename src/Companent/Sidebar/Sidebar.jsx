import React from 'react'
import { Link } from 'react-router-dom'
import { useLang } from './LanguageContext' 

const Sidebar = () => {
  const { t } = useLang(); 

  return (
    <div className='sidebar' style={{ padding: '20px', height: '100%' }}>
      <div className='sidebar-cantainer'>
        <h1 className='logo' style={{ fontSize: '24px', color: '#fff', marginBottom: '30px', textAlign: 'center' }}>
          {t('logo')}
        </h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '15px' }}>
            <Link to="/Contact" style={{ color: '#a3a6b7', textDecoration: 'none' }}>
              {t('contactPages')}
            </Link>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <Link to="/Students" style={{ color: '#a3a6b7', textDecoration: 'none' }}>
              {t('studentsPages')}
            </Link>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <Link to="/Teachers" style={{ color: '#a3a6b7', textDecoration: 'none' }}>
              {t('teachersPages')}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar