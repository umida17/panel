import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

// Barcha sahifalar uchun tarjimalar bazasi
const translations = {
  uz: {
    logo: "Logotip",
    contactPages: "Kontaktlar",
    studentsPages: "Talabalar",
    teachersPages: "O'qituvchilar",
    searchPlaceholder: "Qidiruv...",
    downloadCv: "CV yuklab olish",
    headerText: "Lorem ipsum dolor sit amet... (O'zbekcha matn)",
    noData: "Ma'lumot topilmadi...",
    profileView: "Profilni ko'rish",
    smsWrite: "Sms yozish",
    tableFio: "F.I.Sh",
    tablePhone: "Telefon",
    tableEmail: "Email",
    tableAction: "Amal"
  },
  ru: {
    logo: "Логотип",
    contactPages: "Контакты",
    studentsPages: "Студенты",
    teachersPages: "Учителя",
    searchPlaceholder: "Поиск...",
    downloadCv: "Скачать CV",
    headerText: "Lorem ipsum dolor sit amet... (Русский текст)",
    noData: "Данные не найдены...",
    profileView: "Посмотреть профиль",
    smsWrite: "Написать смс",
    tableFio: "Ф.И.О",
    tablePhone: "Телефон",
    tableEmail: "Эл. адрес",
    tableAction: "Действие"
  },
  en: {
    logo: "Logo",
    contactPages: "Contact Pages",
    studentsPages: "Students Pages",
    teachersPages: "Teachers Pages",
    searchPlaceholder: "Search...",
    downloadCv: "Download CV",
    headerText: "Lorem ipsum dolor sit amet... (English text)",
    noData: "No data found...",
    profileView: "Profile View",
    smsWrite: "Write SMS",
    tableFio: "Full Name",
    tablePhone: "Phone",
    tableEmail: "Email",
    tableAction: "Action"
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('uz'); 

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);