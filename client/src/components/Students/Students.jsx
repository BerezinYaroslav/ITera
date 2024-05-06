import React, { useEffect, useState } from 'react';
import Student from '../Student/Student.jsx';
import api from '../../utils/Api.jsx';

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.getAllStudents()
      .then((res) => setStudents(res));
  }, []);
  return (
    <section className="students">
      <div className="students__header">
        <h3 className="students__title">
          Детали
        </h3>
        <div className="students__buttons">
          <button type="button" className="student__button student__button_filter">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 1H4C2.586 1 1.879 1 1.44 1.412C1 1.824 1 2.488 1 3.815V4.505C1 5.542 1 6.061 1.26 6.491C1.52 6.921 1.993 7.189 2.942 7.723L5.855 9.363C6.491 9.721 6.81 9.9 7.038 10.098C7.512 10.509 7.804 10.993 7.936 11.588C8 11.872 8 12.206 8 12.873V15.543C8 16.452 8 16.907 8.252 17.261C8.504 17.616 8.952 17.791 9.846 18.141C11.725 18.875 12.664 19.242 13.332 18.824C14 18.407 14 17.452 14 15.542V12.872C14 12.206 14 11.872 14.064 11.587C14.1896 11.0042 14.5059 10.4798 14.963 10.097C15.19 9.9 15.509 9.721 16.145 9.362L19.058 7.722C20.006 7.189 20.481 6.922 20.74 6.492C21 6.062 21 5.542 21 4.504V3.814C21 2.488 21 1.824 20.56 1.412C20.122 1 19.415 1 18 1Z"
                stroke="#8147E7"
                strokeWidth="1.5"
              />
            </svg>
            Фильтр
          </button>
          <button type="button" className="student__button student__button_export">
            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 7.5L16.3636 3.75V6.5625H8.18182V8.4375H16.3636V11.25M0 13.125V1.875C0 0.834375 0.818182 0 1.81818 0H12.7273C13.2095 0 13.6719 0.197544 14.0129 0.549175C14.3539 0.900805 14.5455 1.37772 14.5455 1.875V4.6875H12.7273V1.875H1.81818V13.125H12.7273V10.3125H14.5455V13.125C14.5455 13.6223 14.3539 14.0992 14.0129 14.4508C13.6719 14.8025 13.2095 15 12.7273 15H1.81818C1.33597 15 0.873508 14.8025 0.532533 14.4508C0.191558 14.0992 0 13.6223 0 13.125Z"
                fill="white"
              />
            </svg>
            Экспорт
          </button>
          <button type="button" className="student__button student__button_export">
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 7.5L8 3.75V6.5625H0V8.4375H8V11.25M18 13.125V1.875C18 0.834375 17.1 0 16 0H4C3.46957 0 2.96086 0.197544 2.58579 0.549175C2.21071 0.900805 2 1.37772 2 1.875V4.6875H4V1.875H16V13.125H4V10.3125H2V13.125C2 13.6223 2.21071 14.0992 2.58579 14.4508C2.96086 14.8025 3.46957 15 4 15H16C16.5304 15 17.0391 14.8025 17.4142 14.4508C17.7893 14.0992 18 13.6223 18 13.125Z"
                fill="white"
              />
            </svg>
            Импорт
          </button>
          <button type="button" className="student__button student__button_add">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
            </svg>
            Добавить
          </button>
        </div>
      </div>
      <div className="students__content">
        <div className="students__line">
          <div className="students__num">
            №
          </div>
          <div className="students__name">
            Имя
          </div>
          <div className="students__birth">
            Дата рождения
          </div>
          <div className="students__course">
            Курсов всего/
            Активно
          </div>
          <div className="students__date">
            Дата добавления
          </div>
          <div className="students__debt">
            Наличие
            задолжностей
          </div>
        </div>
        {
          students.map((student) => <Student key={student.id} data={student} />)
        }
      </div>
    </section>
  );
}

export default Students;
