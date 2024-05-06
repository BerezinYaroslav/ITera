import React from 'react';

function Lesson() {
  return (
    <div className="lesson">
      <div className="lesson__num">
        1
      </div>
      <div className="lesson__content">
        <h3 className="lesson__header">
          Введение
        </h3>
        <div className="lesson__links">
          <div className="lesson__column">
            <a href="https://google.com" className="lesson__link">Презентация</a>
            <a href="https://google.com" className="lesson__link">Методичка</a>
            <a href="https://google.com" className="lesson__link">Задания</a>
          </div>
          <div className="lesson__column">
            <a href="https://google.com" className="lesson__link">Видео</a>
            <a href="https://google.com" className="lesson__link">Файлы</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lesson;
