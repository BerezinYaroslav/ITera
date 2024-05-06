import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Header from '../Header/Header.jsx';
import Employees from '../Employees/Employees.jsx';
import Popup from '../Popup/Popup.jsx';
import Students from '../Students/Students.jsx';
import Payments from '../Payments/Payments.jsx';
import Calendar from '../Calendar/Calendar.jsx';
import Courses from '../Courses/Courses.jsx';

function Main() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <main className="main">
      <Sidebar />
      <section className="main__content">
        <Header />
        <Routes>
          <Route path="/employees" element={<Employees setPopupOpen={setPopupOpen} isPopupOpen={isPopupOpen} />} />
          <Route path="/students" element={<Students />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </section>
      <Popup
        isOpen={isPopupOpen}
        setOpen={setPopupOpen}
      />
    </main>
  );
}

export default Main;
