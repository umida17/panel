import React from 'react'
import { useLang } from "../../App.jsx"; 
import './Header.css';  

const Header = ({ searchQuery, setSearchQuery }) => {
  const { lang, setLang, t } = useLang();  

  return (
    <div className="header-wrapper">
      <div className="header-container">
        
         <div className="search-section">
          <input 
            type="text" 
            className="search-input"
            placeholder={t('searchPlaceholder')}  
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="header-btn">
            {t('downloadCv')}  
          </button>
        </div>

         <div className="lang-switcher">
          {['uz', 'ru', 'en'].map((language) => (
            <button
              key={language}
              onClick={() => setLang(language)}
              className="lang-btn"
              style={{
                backgroundColor: lang === language ? '#4e73df' : 'transparent',
                color: lang === language ? 'white' : '#495057'
              }}
            >
              {language}
            </button>
          ))}
        </div>

      </div>

       <p className="header-desc">
        {t('headerText')}  
      </p>
    </div>
  )
}

export default Header