import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Employee from '../Employee/Employee.jsx';
import Main from '../Main/Main.jsx';
import StudentPage from '../StudentPage/StudentPage.jsx';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Routes>
          <Route path="/employees/:id" element={<Employee />} />
          <Route path="/students/:id" element={<StudentPage />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
