import React from 'react'

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '20px 24px',
      borderBottom: '1px solid #e9ecef',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)'
    }}>
      
      <div className="header-container" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '16px'
      }}>
         <input 
          type="text" 
          placeholder="Ism bo'yicha qidiruv..."
          value={searchQuery} // Statening qiymati
          onChange={(e) => setSearchQuery(e.target.value)} // Yozilganda stateni o'zgartiradi
          style={{
            width: '300px',
            padding: '10px 16px',
            border: '1px solid #ced4da',
            borderRadius: '8px',
            fontSize: '14px',
            outline: 'none'
          }}
        />

        <button className='header-btn' style={{
          backgroundColor: '#4e73df',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          Download CV
        </button>
      </div>
 

    </div>
  )
}

export default Header