import React from 'react';
import { Link } from 'react-router-dom';

function Student({ data }) {
  return (
    <Link to={`/students/${data.id}`} className="student">
      <div className="student__num">
        {data.id}
      </div>
      <div className="student__name">
        {data.name}
      </div>
      <div className="student__birth">
        {data.birthday}
      </div>
      <div className="student__course">
        {`${data.coursesCount}/${data.activeCoursesCount}`}
      </div>
      <div className="student__date">
        {data.creationDate}
      </div>
      <div className="student__debt">
        {data.hasDebt ? (
          <span className="student__debt-true">
            Да
          </span>
        ) : (
          <span className="student__debt-false">
            Нет
          </span>
        )}
      </div>
    </Link>
  );
}

export default Student;
