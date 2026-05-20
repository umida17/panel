import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-cantainer'>

        <h1 className='logo'>Logo</h1>
        <ul>
            <li><Link to="Contact">ContactPages</Link></li>
            <li><Link href="Students">StudentsPages</Link></li>
            <li><Link href="Teachers">TeachersPages</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
