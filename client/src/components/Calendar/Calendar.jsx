import React, { useState } from 'react';
import calendar from '../../images/calendar.png';

function Calendar() {
  const [isOpen, setIsOpen] = useState(false);

  function handlePopup() {
    setIsOpen(!isOpen);
  }

  return (
    <section className="calendar">
      <div className="calendar__header">
        <h3 className="calendar__title">
          Расписание
        </h3>
        <button type="button" className="calendar__btn" onClick={handlePopup}>
          Вид
          <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.5999 2.04568H12.7499V0.5H11.0499V2.04568H4.24995V0.5H2.54997V2.04568H1.48748C1.11348 2.09978 0.764994 2.25435 0.492996 2.49393C0.229499 2.74124 0.0594994 3.0581 0 3.39815V14.6043C0.0594994 14.9444 0.229499 15.2612 0.492996 15.5085C0.764994 15.7481 1.11348 15.9027 1.48748 15.9568H10.1999V14.4111H1.69998V6.68272H13.5999V8.2284H15.2999V3.59136C15.2999 2.73351 14.5434 2.04568 13.5999 2.04568ZM13.5999 5.13704H1.69998V3.59136H13.5999V5.13704ZM11.8999 15.9568L13.4299 17.3247C13.8549 17.7111 14.4499 17.402 14.4499 16.946V13.6383L16.8298 11.0106C17.2548 10.4696 16.8298 9.77408 16.1498 9.77408H10.1999C9.5199 9.77408 9.09491 10.5469 9.51991 11.0106L11.8999 13.6383V15.9568Z"
              fill="#3C3C3C"
            />
          </svg>
          <div className={isOpen ? 'calendar__btn-popup calendar__btn-popup_active' : 'calendar__btn-popup'}>
            <span className="calendar__btn-item">
              Год
            </span>
            <span className="calendar__btn-item">
              Месяц
            </span>
            <span className="calendar__btn-item calendar__btn-item_active">
              Неделя
            </span>
          </div>
        </button>
      </div>
      <img src={calendar} alt="календарь" className="calendar__img" />
    </section>
  );
}

export default Calendar;
