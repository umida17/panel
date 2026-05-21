import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from "./LanguageContext";
import Contact from './Pages/ContactPages/ContactPages';
import Students from './Pages/StudentPages/StudentPages';
import Teachers from './Pages/TeachersPages/TeachersPages';
import Layout from './Companent/Layout/Layout';

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          
          <Route element={<Layout />}>
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Students' element={<Students />} />
            <Route path='/Teachers' element={<Teachers />} />
          </Route>
         
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App