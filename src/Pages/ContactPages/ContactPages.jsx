import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import './ContactPages.css' 
import { useLang } from "../../LanguageContext.jsx";

const ContactPages = () => {
  const [contacts, setContacts] = useState([])
  
   const { searchQuery } = useOutletContext()

  useEffect(() => {
      fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Students")
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(err => console.log("Xatolik:", err))
  }, [])

   const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="contact-page-container">
      <div className="table-responsive">
        
        <table className="contact-table">
          <thead>
     <thead>
            <tr>
                <th>{t('tableFio')}</th>
                <th>{t('tablePhone')}</th>
                <th>{t('tableEmail')}</th>
                <th>{t('tableAction')}</th>
            </tr>
            </thead>

 
    <button className="action-btn">{t('smsWrite')}</button>
          </thead>
          <tbody>
            
            {filteredContacts.length > 0 ? (
              filteredContacts.map((el) => (
                <tr key={el.id}>
                   <td>
                    <div className="contact-profile">
                      <img src={el.avatar} alt={el.name} className="contact-avatar" />
                      <span>{el.name}</span>
                    </div>
                  </td>
                  
                   <td>{el.phone || "+998 (90) 123-45-67"}</td>
                  
                   <td>{el.email || `${el.name.toLowerCase().replace(/\s+/g, '')}@gmail.com`}</td>
                  
                   <td>
                    <button className="action-btn">Sms yozish</button>
                  </td>
                </tr>
              ))
            ) : (
               <tr>
                <td colSpan="4" style={{ textAlign: 'center', padding: '30px', color: '#888' }}>
                  Bunday kontakt topilmadi...
                </td>
              </tr>
            )}

          </tbody>
        </table>

      </div>
    </div>
  )
}

export default ContactPages