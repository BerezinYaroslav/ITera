import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import avatar from '../../images/student_avatar.png';
import CourseCard from '../CourseCard/CourseCard.jsx';
import api from '../../utils/Api.jsx';

function StudentPage() {
  const [student, setStudent] = useState({});
  const [courses, setCourses] = useState([]);

  const params = useParams();

  useEffect(() => {
    api.getStudent(params.id)
      .then((res) => setStudent(res));
    api.getStudentCourses(params.id)
      .then((res) => setCourses(res));
  }, [params.id]);

  return (
    <section className="student-page">
      <div className="student-page__header">
        <Link to="/students" className="employee__back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825L9.425 14.6L8 16Z" fill="black" />
          </svg>
        </Link>
        Профиль ученика
      </div>
      <div className="student-page__profile">
        <img src={avatar} alt="фотография ученика" className="student-page__img" />
        <div className="student-page__bio">
          <h2 className="student-page__name">
            {student.name}
          </h2>
          <p className="student-page__age">
            Дата рождения :
            {' '}
            {student.birthday}
          </p>
        </div>
      </div>
      <div className="employee__buttons">
        <nav className="employee__nav">
          <button type="button" className="employee__button">
            Профиль
          </button>
          <button type="button" className="employee__button employee__button_active">
            Курсы
          </button>
          <button type="button" className="employee__button">
            Задания
          </button>
          <button type="button" className="employee__button">
            Тесты
          </button>
          <button type="button" className="employee__button">
            Экзамены
          </button>
          <button type="button" className="employee__button">
            Оплата
          </button>
        </nav>
      </div>
      <div className="student-page__courses">
        <div className="student-page__line">
          <div className="student-page__num">
            №
          </div>
          <div className="student-page__course">
            Название курса
          </div>
          <div className="student-page__teacher">
            Преподаватель
          </div>
          <div className="student-page__lessons">
            Уроков пройдено/
            Уроков всего
          </div>
          <div className="student-page__paid">
            Оплачено
            уроков
          </div>
          <div className="student-page__date">
            Дата
            добавления
            в группу
          </div>
          <div className="student-page__status">
            Статус
            группы
          </div>
        </div>
        {
          courses.map((course) => <CourseCard key={course.id} data={course} />)
        }
      </div>
    </section>
  );
}

export default StudentPage;
