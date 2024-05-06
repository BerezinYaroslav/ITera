import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ data }) {
  return (
    <Link to="/courses/id" className="course-card">
      <div className="course-card__num">
        {data.id}
      </div>
      <div className="course-card__course">
        {data.courseName}
      </div>
      <div className="course-card__teacher">
        {data.teacherName}
      </div>
      <div className="course-card__lessons">
        {`${data.visitedClassesCount}/${data.classesCount}`}
      </div>
      <div className="course-card__paid">
        {data.payedClassesCount}
      </div>
      <div className="course-card__date">
        {data.creation_date}
      </div>
      <div className="course-card__status">
        <span className="course-card__status-item">
          {data.status}
        </span>
      </div>
    </Link>
  );
}

export default CourseCard;
