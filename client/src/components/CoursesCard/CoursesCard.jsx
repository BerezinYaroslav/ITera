import React from 'react';

function CoursesCard({ data }) {
  return (
    <div className="courses-card">
      <div className="courses-card__id">
        {data.id}
      </div>
      <div className="courses-card__name">
        {data.name}
      </div>
      <div className="courses-card__lessons">
        {data.classesCount}
      </div>
      <a href={data.presentationUrl || 'https://google.com'} target="_blank" className="courses-card__presentation courses-card__link">
        Презентация
      </a>
      <a href={data.methodologyUrl || 'https://google.com'} target="_blank" className="courses-card__methodology courses-card__link">
        Методичка
      </a>
      <a href={data.exercisesUrl || 'https://google.com'} target="_blank" className="courses-card__excersises courses-card__link">
        Задания
      </a>
    </div>
  );
}

export default CoursesCard;
