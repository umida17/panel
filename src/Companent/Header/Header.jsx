import React from 'react'

const Header = () => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '20px 24px',
      borderBottom: '1px solid #e9ecef',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)'
    }}>
      
      {/* Elementlar qatori: Endi hamma narsa tartib bilan chapdan joylashadi */}
      <div 
        className="header-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px', // Input va Tugma orasidagi masofa
          marginBottom: '16px'
        }}
      >
        {/* Input stili */}
        <input 
          type="text" 
          placeholder="Qidiruv..."
          style={{
            width: '500px',
            padding: '10px 16px',
            border: '1px solid #aec7e0',
            borderRadius: '8px',
            fontSize: '14px',
            outline: 'none'
          }}
        />

        {/* Tugma stili (Inputning srazu yonida turadi) */}
        <button 
          className='header-btn'
          style={{
            backgroundColor: '#4e73df',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'block' // Ko'rinishini kafolatlash uchun
          }}
        >
          Download CV
        </button>
      </div>

       

    </div>
  )
}

export default Header