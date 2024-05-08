import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import avatar from '../../images/avatar.png';
import api from '../../utils/Api.jsx';

function Employee() {
  const [employee, setEmployee] = useState({});
  const params = useParams();

  useEffect(() => {
    api.getEmployee(params.id)
      .then((res) => setEmployee(res));
  }, [params.id]);

  return (
    <section className="employee">
      <div className="employee__profile">
        <div className="employee__header">
          <div className="employee__title">
            <Link to="/employees" className="employee__back">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825L9.425 14.6L8 16Z" fill="black" />
              </svg>
            </Link>
            Профиль сотрудника
          </div>
          <button type="button" className="employee__delete">
            Удалить
          </button>
        </div>
        <div className="employee__container">
          <div className="employee__column">
            <div className="employee-card__bio employee-card__bio_id">
              <img src={avatar} className="employee-card__image" alt="фотография сотрудника" />
              <div className="employee-card__info">
                <p className="employee-card__name">
                  {employee.name}
                </p>
                <div className="employee-card__position">
                  {employee.role}
                  <span className="employee-card__status">
                    Online
                  </span>
                </div>
                <p className="employee-card__visit">
                  В сети
                </p>
              </div>
            </div>
          </div>
          <div className="employee__column">
            <div className="employee-card__additional-info">
              <div className="employee-card__text">
                <div className="employee-card__icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 18C14.4 18 18 14.4 18 10C18 5.6 14.4 2 10 2C5.6 2 2 5.6 2 10C2 14.4 5.6 18 10 18ZM10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0ZM15 11.9L14.3 13.2L9 10.3V5H10.5V9.4L15 11.9Z" fill="#8A8A8A" />
                  </svg>
                </div>
                <div className="employee-card__inscription">
                  Добавлен(-а)
                  {' '}
                  {employee.creationDate}
                </div>
              </div>
              <div className="employee-card__text">
                <div className="employee-card__icon_purple">
                  <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.5 0.125C1.33424 0.125 1.17527 0.190848 1.05806 0.308058C0.940848 0.425269 0.875 0.58424 0.875 0.75V2C0.875 2.16576 0.940848 2.32473 1.05806 2.44194C1.17527 2.55915 1.33424 2.625 1.5 2.625H2.75C2.91576 2.625 3.07473 2.55915 3.19194 2.44194C3.30915 2.32473 3.375 2.16576 3.375 2V0.75C3.375 0.58424 3.30915 0.425269 3.19194 0.308058C3.07473 0.190848 2.91576 0.125 2.75 0.125H1.5ZM2.75 0.75H1.5V2H2.75V0.75Z" fill="#8147E7" />
                    <path d="M5.25 1.375C5.25 1.20924 5.31585 1.05027 5.43306 0.933058C5.55027 0.815848 5.70924 0.75 5.875 0.75H17.125C17.2908 0.75 17.4497 0.815848 17.5669 0.933058C17.6842 1.05027 17.75 1.20924 17.75 1.375C17.75 1.54076 17.6842 1.69973 17.5669 1.81694C17.4497 1.93415 17.2908 2 17.125 2H5.875C5.70924 2 5.55027 1.93415 5.43306 1.81694C5.31585 1.69973 5.25 1.54076 5.25 1.375ZM5.875 5.75C5.70924 5.75 5.55027 5.81585 5.43306 5.93306C5.31585 6.05027 5.25 6.20924 5.25 6.375C5.25 6.54076 5.31585 6.69973 5.43306 6.81694C5.55027 6.93415 5.70924 7 5.875 7H17.125C17.2908 7 17.4497 6.93415 17.5669 6.81694C17.6842 6.69973 17.75 6.54076 17.75 6.375C17.75 6.20924 17.6842 6.05027 17.5669 5.93306C17.4497 5.81585 17.2908 5.75 17.125 5.75H5.875ZM5.875 10.75C5.70924 10.75 5.55027 10.8158 5.43306 10.9331C5.31585 11.0503 5.25 11.2092 5.25 11.375C5.25 11.5408 5.31585 11.6997 5.43306 11.8169C5.55027 11.9342 5.70924 12 5.875 12H17.125C17.2908 12 17.4497 11.9342 17.5669 11.8169C17.6842 11.6997 17.75 11.5408 17.75 11.375C17.75 11.2092 17.6842 11.0503 17.5669 10.9331C17.4497 10.8158 17.2908 10.75 17.125 10.75H5.875Z" fill="#8147E7" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.875 5.75C0.875 5.58424 0.940848 5.42527 1.05806 5.30806C1.17527 5.19085 1.33424 5.125 1.5 5.125H2.75C2.91576 5.125 3.07473 5.19085 3.19194 5.30806C3.30915 5.42527 3.375 5.58424 3.375 5.75V7C3.375 7.16576 3.30915 7.32473 3.19194 7.44194C3.07473 7.55915 2.91576 7.625 2.75 7.625H1.5C1.33424 7.625 1.17527 7.55915 1.05806 7.44194C0.940848 7.32473 0.875 7.16576 0.875 7V5.75ZM1.5 5.75H2.75V7H1.5V5.75ZM1.5 10.125C1.33424 10.125 1.17527 10.1908 1.05806 10.3081C0.940848 10.4253 0.875 10.5842 0.875 10.75V12C0.875 12.1658 0.940848 12.3247 1.05806 12.4419C1.17527 12.5592 1.33424 12.625 1.5 12.625H2.75C2.91576 12.625 3.07473 12.5592 3.19194 12.4419C3.30915 12.3247 3.375 12.1658 3.375 12V10.75C3.375 10.5842 3.30915 10.4253 3.19194 10.3081C3.07473 10.1908 2.91576 10.125 2.75 10.125H1.5ZM2.75 10.75H1.5V12H2.75V10.75Z" fill="#8147E7" />
                  </svg>
                </div>
                <div className="employee-card__inscription">
                  Ответственная
                  {' '}
                  <span className="employee-card__inscription_highlighted">{employee.subordinatesCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="employee__buttons">
          <nav className="employee__nav">
            <button type="button" className="employee__button">
              Ученики
            </button>
            <button type="button" className="employee__button employee__button_active">
              Профиль
            </button>
            <button type="button" className="employee__button">
              Продажи
            </button>
            <button type="button" className="employee__button">
              История
            </button>
          </nav>
        </div>
      </div>
      <div className="employee__content">
        <div className="employee__text-block">
          <p className="employee__subtitle">
            Персональная информация
          </p>
          <div className="employee__text-container">
            <p className="employee__text">
              <span className="employee__text_highlighted">ФИО</span>
              {' '}
              :
              {' '}
              {employee.name}
            </p>
            <p className="employee__text">
              <span className="employee__text_highlighted">Дата рождения</span>
              {' '}
              :
              {' '}
              {employee.birthday}
            </p>
            <p className="employee__text">
              <span className="employee__text_highlighted">Дата добавления</span>
              {' '}
              :
              {' '}
              {employee.creationDate}
            </p>
            <p className="employee__text">
              <span className="employee__text_highlighted">Филиал</span>
              {' '}
              :
              {' '}
              {employee.office}
            </p>
          </div>
        </div>
        <div className="employee__text-block">
          <p className="employee__subtitle">
            Образование
          </p>
          <div className="employee__text-container">
            <p className="employee__text">
              <span className="employee__text_highlighted">Образование</span>
              {' '}
              :
              {' '}
              Высшее
            </p>
            <p className="employee__text">
              <span className="employee__text_highlighted">Наименование учебного заведения</span>
              {' '}
              :
              {' '}
              {employee.universityName}
            </p>
            <p className="employee__text">
              <span className="employee__text_highlighted">Специальность</span>
              {' '}
              :
              {' '}
              {employee.speciality}
            </p>
          </div>
        </div>
        <div className="employee__text-block">
          <p className="employee__subtitle">
            Контактная информация
          </p>
          <div className="employee__text-container">
            <p className="employee__text">
              <span className="employee__text_highlighted">Адрес регистрации</span>
              {' '}
              :
              {' '}
              {`${employee.registrationAddress} ${employee.registrationState} ${employee.registrationCity}`}
            </p>
            <p className="employee__text">
              <span className="employee__text_highlighted">Адрес проживания</span>
              {' '}
              :
              {' '}
              {`${employee.livingAddress} ${employee.livingState} ${employee.livingCity}`}
            </p>
            <p className="employee__text">
              <span className="employee__text_highlighted">Основной номер</span>
              {' '}
              :
              {' '}
              {employee.phoneNumber}
            </p>
            <p className="employee__text">
              <span className="employee__text_highlighted">Дополнительный номер телефона</span>
              {' '}
              :
              {' '}
              {employee.extraPhoneNumber}
            </p>
            <p className="employee__text">
              <span className="employee__text_highlighted">Email</span>
              {' '}
              :
              {' '}
              {employee.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Employee;
