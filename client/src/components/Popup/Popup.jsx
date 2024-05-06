import React, { useState } from 'react';
import api from '../../utils/Api.jsx';

function Popup({ isOpen, setOpen }) {
  const [position, setPosition] = useState(1);
  const [formClassName, setFormClassName] = useState('popup__form-item');

  const [name, setName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [university, setUniversity] = useState('');
  const [mainNumber, setMainNumber] = useState('');
  const [extraNumber, setExtraNumber] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [registrationAddress, setRegistrationAddress] = useState('');
  const [registrationState, setRegistrationState] = useState('');
  const [registrationCity, setRegistrationCity] = useState('');
  const [livingAddress, setLivingAddress] = useState('');
  const [livingState, setLivingState] = useState('');
  const [livingCity, setLivingCity] = useState('');
  const [office, setOffice] = useState('');
  const [role, setRole] = useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeSpeciality(e) {
    setSpeciality(e.target.value);
  }

  function handleChangeUniversity(e) {
    setUniversity(e.target.value);
  }

  function handleChangeMainNumber(e) {
    setMainNumber(e.target.value);
  }

  function handleChangeExtraNumber(e) {
    setExtraNumber(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangeDate(e) {
    setDate(e.target.value);
  }

  function handleChangeRegistrationAddress(e) {
    setRegistrationAddress(e.target.value);
  }

  function handleChangeRegistrationState(e) {
    setRegistrationState(e.target.value);
  }

  function handleChangeRegistrationCity(e) {
    setRegistrationCity(e.target.value);
  }

  function handleChangeLivingAddress(e) {
    setLivingAddress(e.target.value);
  }

  function handleChangeLivingState(e) {
    setLivingState(e.target.value);
  }

  function handleChangeLivingCity(e) {
    setLivingCity(e.target.value);
  }

  function handleChangeOffice(e) {
    setOffice(e.target.value);
  }

  function handleChangeRole(e) {
    setRole(e.target.value);
  }

  function handleNext() {
    if (position === 1) {
      setFormClassName('popup__form-item popup__form-item_addresses');
      setPosition(position + 1);
    } else if (position === 2) {
      setFormClassName('popup__form-item popup__form-item_roles');
      setPosition(position + 1);
    }
  }

  function handlePrevious() {
    if (position === 3) {
      setFormClassName('popup__form-item popup__form-item_addresses');
      setPosition(position - 1);
    } else if (position === 2) {
      setFormClassName('popup__form-item');
      setPosition(position - 1);
    }
  }

  function handleClosePopup() {
    setOpen(false);
    setFormClassName('popup__form-item');
    setPosition(1);
    setName('');
    setSpeciality('');
    setUniversity('');
    setMainNumber('');
    setExtraNumber('');
    setEmail('');
    setDate('');
    setRegistrationAddress('');
    setRegistrationState('');
    setRegistrationCity('');
    setLivingAddress('');
    setLivingState('');
    setLivingCity('');
    setOffice('');
    setRole('');
  }

  function handleSubmit(e) {
    e.preventDefault();

    api.addEmployee({
      name,
      speciality,
      university,
      mainNumber,
      extraNumber,
      email,
      date,
      registrationAddress,
      registrationState,
      registrationCity,
      livingAddress,
      livingState,
      livingCity,
      office,
      role,
    })
      .then(() => {
        handleClosePopup();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={isOpen ? 'popup popup_opened' : 'popup'}>
      <div className="popup__container">
        <button type="button" className="popup__button-back" onClick={handlePrevious}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825L9.425 14.6L8 16Z"
              fill="#fff"
            />
          </svg>
          Назад
        </button>
        <button type="button" className="popup__button-close" onClick={handleClosePopup}>
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.77246 1.77148L21.2883 21.2873" stroke="#fff" strokeWidth="2.54867" strokeLinecap="round" />
            <path d="M1.77246 21.2873L21.2883 1.77148" stroke="#fff" strokeWidth="2.54867" strokeLinecap="round" />
          </svg>
        </button>
        <div className="popup__header">
          <h3 className="popup__title">
            Добавить сотрудника
          </h3>
          <div className="popup__progressline">
            <div className="popup__progress" />
          </div>
        </div>
        <form className="popup__form" onSubmit={handleSubmit}>
          <div className={formClassName}>
            <div className="popup__form-container">
              <input
                className="popup__input popup__input_name"
                type="text"
                placeholder="ФИО"
                onChange={handleChangeName}
                value={name}
              />
              <input
                className="popup__input popup__input_spec"
                type="text"
                placeholder="Специальность"
                onChange={handleChangeSpeciality}
                value={speciality}
              />
              <input
                className="popup__input popup__input_stud"
                type="text"
                placeholder="Наименование учебного заведения"
                onChange={handleChangeUniversity}
                value={university}
              />
              <div className="popup__numbers">
                <input
                  className="popup__input popup__input_tel"
                  type="tel"
                  placeholder="Основной номер телефона"
                  onChange={handleChangeMainNumber}
                  value={mainNumber}
                />
                <input
                  className="popup__input popup__input_tel"
                  type="tel"
                  placeholder="Доп-ный номер телефона"
                  onChange={handleChangeExtraNumber}
                  value={extraNumber}
                />
              </div>
              <input
                className="popup__input popup__input_email"
                type="email"
                placeholder="Email"
                onChange={handleChangeEmail}
                value={email}
              />
              <input
                className="popup__input popup__input_date"
                type="text"
                placeholder="Дата рождения"
                onChange={handleChangeDate}
                value={date}
              />
            </div>
            <button type="button" className="popup__button-form" onClick={handleNext}>
              Далее
            </button>
          </div>
          <div className={formClassName}>
            <div className="popup__form-container">
              <p className="popup__text">
                Адрес регистрации
              </p>
              <input
                className="popup__input popup__input_address"
                type="text"
                placeholder="Адрес"
                onChange={handleChangeRegistrationAddress}
                value={registrationAddress}
              />
              <div className="popup__addresses">
                <input
                  className="popup__input popup__input_city"
                  type="text"
                  placeholder="Область"
                  onChange={handleChangeRegistrationState}
                  value={registrationState}
                />
                <input
                  className="popup__input popup__input_city"
                  type="text"
                  placeholder="Город"
                  onChange={handleChangeRegistrationCity}
                  value={registrationCity}
                />
              </div>
              <p className="popup__text">
                Адрес проживания
              </p>
              <input
                className="popup__input popup__input_address"
                type="text"
                placeholder="Адрес"
                onChange={handleChangeLivingAddress}
                value={livingAddress}
              />
              <div className="popup__addresses">
                <input
                  className="popup__input popup__input_city"
                  type="text"
                  placeholder="Область"
                  onChange={handleChangeLivingState}
                  value={livingState}
                />
                <input
                  className="popup__input popup__input_city"
                  type="text"
                  placeholder="Город"
                  onChange={handleChangeLivingCity}
                  value={livingCity}
                />
              </div>
            </div>
            <button type="button" className="popup__button-form" onClick={handleNext}>
              Далее
            </button>
          </div>
          <div className={formClassName}>
            <div className="popup__form-container">
              <p className="popup__text">
                Выберите филиал
              </p>
              <input
                className="popup__input popup__input_address"
                type="text"
                placeholder="Северный"
                onChange={handleChangeOffice}
                value={office}
              />
              <p className="popup__text">
                Выберите роль
              </p>
              <input
                className="popup__input popup__input_address"
                type="text"
                placeholder="Бухгалтер"
                onChange={handleChangeRole}
                value={role}
              />
            </div>
            <button type="submit" className="popup__button-form">
              Добавить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Popup;
