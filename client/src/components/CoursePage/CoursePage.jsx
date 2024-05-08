import React from 'react';
import { Link } from 'react-router-dom';
import Lesson from '../Lesson/Lesson.jsx';

function CoursePage() {
  const [course, setCourse] = React.useState('Python');
  const [isEdit, setIsEdit] = React.useState(false);

  function handleEdit() {
    setIsEdit(!isEdit);
  }

  function handleChange(e) {
    setCourse(e.target.value);
  }

  return (
    <div className="course-page">
      <div className="student-page__header">
        <Link to="/courses" className="employee__back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825L9.425 14.6L8 16Z" fill="black" />
          </svg>
        </Link>
        <input className={isEdit ? 'course-page__title course-page__title_edit' : 'course-page__title'} value={course} onChange={handleChange} />
        <button type="button" className="course-page__button" onClick={handleEdit}>
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.6263 5.1647C23.1246 4.66644 23.1246 3.836 22.6263 3.36328L19.6367 0.373698C19.164 -0.124566 18.3336 -0.124566 17.8353 0.373698L15.4845 2.71171L20.2755 7.50271M0 18.209V23H4.791L18.9213 8.85696L14.1303 4.06596L0 18.209Z"
              fill="#E1E1E1"
            />
          </svg>
        </button>
      </div>
      <div className="course-page__content">
        <Lesson data={{ lesson: 'Введение', num: '1' }} />
        <Lesson data={{ lesson: 'Переменные', num: '2' }} />
        <Lesson data={{ lesson: 'Строки', num: '3' }} />
        <Lesson data={{ lesson: 'Условный оператор', num: '4' }} />
        <Lesson data={{ lesson: 'Циклы', num: '5' }} />
      </div>
    </div>
  );
}

export default CoursePage;
