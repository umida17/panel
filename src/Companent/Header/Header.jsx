import React from 'react'
import { useLang } from "../../LanguageContext.jsx";

const Header = ({ searchQuery, setSearchQuery }) => {
  const { lang, setLang, t } = useLang();  

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
        justifyContent: 'space-between',  
        flexWrap: 'wrap',
        gap: '20px',
        marginBottom: '16px'
      }}>
        
         <div style={{ display: 'flex', gap: '15px', flex: 1, minWidth: '280px' }}>
          <input 
            type="text" 
            placeholder={t('searchPlaceholder')}  
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              maxWidth: '300px',
              padding: '10px 16px',
              border: '1px solid #ced4da',
              borderRadius: '8px',
              outline: 'none'
            }}
          />
          <button className='header-btn' style={{
            backgroundColor: '#4e73df', color: 'white', border: 'none',
            padding: '10px 20px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer'
          }}>
            {t('downloadCv')}  
          </button>
        </div>

         <div style={{ display: 'flex', gap: '8px', backgroundColor: '#f1f3f9', padding: '4px', borderRadius: '8px' }}>
          {['uz', 'ru', 'en'].map((language) => (
            <button
              key={language}
              onClick={() => setLang(language)}
              style={{
                padding: '6px 12px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '12px',
                 backgroundColor: lang === language ? '#4e73df' : 'transparent',
                color: lang === language ? 'white' : '#495057',
                transition: 'all 0.2s'
              }}
            >
              {language}
            </button>
          ))}
        </div>

      </div>

      <p style={{ fontSize: '13px', color: '#6c757d', margin: 0 }}>
        {t('headerText')}  
      </p>
    </div>
  )
}

export default Header