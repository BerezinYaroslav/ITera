import React from 'react';
import { Link } from 'react-router-dom';
import Lesson from '../Lesson/Lesson.jsx';

function CoursePage() {
  return (
    <div className="course-page">
      <div className="student-page__header">
        <Link to="/courses" className="employee__back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825L9.425 14.6L8 16Z" fill="black" />
          </svg>
        </Link>
        Python Start
      </div>
      <div className="course-page__content">
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
      </div>
    </div>
  );
}

export default CoursePage;
