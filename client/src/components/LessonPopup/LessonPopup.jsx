import React from 'react';

function LessonPopup(
  {
    // eslint-disable-next-line max-len
    setExercises, setFiles, setVideo, setMethodology, setPresentation, isOpen, currentLink, handleClosePopup, modalInput, setModalInput,
  },
) {
  function handleInputChange(e) {
    switch (currentLink) {
      case 'Презентация': setPresentation(e.target.value);
        break;
      case 'Методичка': setMethodology(e.target.value);
        break;
      case 'Задания': setExercises(e.target.value);
        break;
      case 'Видео': setVideo(e.target.value);
        break;
      case 'Файлы': setFiles(e.target.value);
        break;
      default:
    }
    setModalInput(e.target.value);
  }

  return (
    <div className={isOpen ? 'lesson-popup lesson-popup_active' : 'lesson-popup'}>
      <div className="lesson-popup__container">
        <div className="lesson-popup__title">
          {currentLink}
        </div>
        <div className="lesson-popup__content">
          <input className="lesson-popup__input" value={modalInput} type="text" onChange={handleInputChange} />
          <a href="https://google.com" type="button" className="lesson-popup__link">
            <svg width="25" height="25" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.3333 0V3.44444H24.3167L7.93333 20.3739L10.2833 22.8022L26.6667 5.87278V12.0556H30V0M26.6667 27.5556H3.33333V3.44444H15V0H3.33333C1.48333 0 0 1.55 0 3.44444V27.5556C0 28.4691 0.351189 29.3452 0.976311 29.9911C1.60143 30.6371 2.44928 31 3.33333 31H26.6667C27.5507 31 28.3986 30.6371 29.0237 29.9911C29.6488 29.3452 30 28.4691 30 27.5556V15.5H26.6667V27.5556Z"
                fill="#989898"
              />
            </svg>
          </a>
        </div>
        <div className="lesson-popup__buttons">
          <button className="lesson-popup__button" type="button" onClick={handleClosePopup}>
            Отмена
          </button>
          <button className="lesson-popup__button lesson-popup__button_add" type="button" onClick={handleClosePopup}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
}

export default LessonPopup;
