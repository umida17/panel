import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'  
import './TeachersPages.css'  

const TeachersPages = () => {
  const [teachers, setTeachers] = useState([])
  
   const { searchQuery } = useOutletContext()

  useEffect(() => {
     fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Teachers")
      .then(response => response.json())
      .then(data => setTeachers(data))
      .catch(err => console.log("Xatolik:", err))
  }, [])

   const filteredTeachers = teachers.filter(teacher => 
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="teachers-page-container">
      <div className="teachers-grid">
        
        {filteredTeachers.length > 0 ? (
          filteredTeachers.map((el) => (
            <div key={el.id} className="teacher-card">
              <img src={el.avatar} alt={el.name} className="teacher-avatar" />
              <h3 className="teacher-name">{el.name}</h3>
              <button className="teacher-btn">Profile View</button>
            </div>
          ))
        ) : (
           <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#888' }}>
            Bunday o'qituvchi topilmadi...
          </div>
        )}

      </div>
    </div>
  )
}

export default TeachersPages