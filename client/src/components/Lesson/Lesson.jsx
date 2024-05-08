import React, { useState } from 'react';
import LessonPopup from '../LessonPopup/LessonPopup.jsx';

function Lesson({ data }) {
  const [modalInput, setModalInput] = useState('');
  const [lesson, setLesson] = useState(data.lesson);

  const [isOpen, setIsOpen] = useState(false);

  const [presentation, setPresentation] = useState('');
  const [methodology, setMethodology] = useState('');
  const [exercises, setExercises] = useState('');
  const [video, setVideo] = useState('');
  const [files, setFiles] = useState('');

  const [currentLink, setCurrentLink] = useState('');

  function handleInputChange(e) {
    setLesson(e.target.value);
  }

  function handleClick(e) {
    setCurrentLink(e.target.innerText);
    setIsOpen(true);
  }

  function handleClosePopup() {
    setIsOpen(false);
    setModalInput('');
  }

  return (
    <div className="lesson">
      <div className="lesson__num">
        {data.num}
      </div>
      <div className="lesson__content">
        <div className="lesson__name">
          <input className="lesson__header" value={lesson} onChange={handleInputChange} />
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.6263 5.1647C23.1246 4.66644 23.1246 3.836 22.6263 3.36328L19.6367 0.373698C19.164 -0.124566 18.3336 -0.124566 17.8353 0.373698L15.4845 2.71171L20.2755 7.50271M0 18.209V23H4.791L18.9213 8.85696L14.1303 4.06596L0 18.209Z"
              fill="#E1E1E1"
            />
          </svg>
        </div>
        {/* <input className="lesson__header" value={lesson} onChange={handleInputChange} /> */}
        <div className="lesson__links">
          <button
            type="button"
            className={presentation === '' ? 'lesson__link' : 'lesson__link lesson__link_active'}
            onClick={handleClick}
          >
            Презентация
          </button>
          <button type="button" className={methodology === '' ? 'lesson__link' : 'lesson__link lesson__link_active'} onClick={handleClick}>Методичка</button>
          <button type="button" className={exercises === '' ? 'lesson__link' : 'lesson__link lesson__link_active'} onClick={handleClick}>Задания</button>
          <button type="button" className={video === '' ? 'lesson__link' : 'lesson__link lesson__link_active'} onClick={handleClick}>Видео</button>
          <button type="button" className={files === '' ? 'lesson__link' : 'lesson__link lesson__link_active'} onClick={handleClick}>Файлы</button>
        </div>
      </div>
      <LessonPopup
        setPresentation={setPresentation}
        setMethodology={setMethodology}
        setExercises={setExercises}
        setVideo={setVideo}
        setFiles={setFiles}
        isOpen={isOpen}
        currentLink={currentLink}
        /* eslint-disable-next-line react/jsx-no-bind */
        handleClosePopup={handleClosePopup}
        modalInput={modalInput}
        setModalInput={setModalInput}
      />
    </div>
  );
}

export default Lesson;
