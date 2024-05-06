import React from 'react';
import calendar from '../../images/calendar.png';

function Calendar() {
  return (
    <section className="calendar">
      <h3 className="calendar__title">
        Расписание
      </h3>
      <img src={calendar} alt="календарь" className="calendar__img" />
    </section>
  );
}

export default Calendar;
