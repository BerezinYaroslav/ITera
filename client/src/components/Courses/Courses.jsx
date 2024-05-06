import React, { useEffect, useState } from 'react';
import CoursesCard from '../CoursesCard/CoursesCard.jsx';
import api from '../../utils/Api.jsx';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.getAllCourses()
      .then((res) => setCourses(res));
  }, []);

  return (
    <section className="courses">
      <h3 className="courses__title">
        Курсы
      </h3>
      <div className="courses__contents">
        <div className="courses__id">
          ID
        </div>
        <div className="courses__name">
          Название курса
        </div>
        <div className="courses__lessons">
          Кол-во уроков
        </div>
      </div>
      <div className="courses__items">
        {
          courses.map((course) => <CoursesCard key={course.id} data={course} />)
        }
      </div>
    </section>
  );
}

export default Courses;
