import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'  
import './StudentPages.css'

const StudentPages = () => {
  const [students, setStudents] = useState([])
  
   const { searchQuery } = useOutletContext()

  useEffect(() => {
    fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Students")
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(err => console.log("Xatolik:", err))
  }, [])

   const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="students-page-container">
      <div className="students-grid">
        
         {filteredStudents.length > 0 ? (
          filteredStudents.map((el) => (
            <div key={el.id} className="student-card">
              <img src={el.avatar} alt={el.name} className="student-avatar" />
              <h3 className="student-name">{el.name}</h3>
              <button className="student-btn">Profile View</button>
            </div>
          ))
        ) : (
           <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#888' }}>
            Bunday talaba topilmadi...
          </div>
        )}

      </div>
    </div>
  )
}

export default StudentPages