import axios from 'axios';

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  // eslint-disable-next-line class-methods-use-this
  _checkResponse(res) {
    if (res.status === 200 || res.status === 201) {
      return res.data;
    }

    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getAllEmployees() {
    return axios.get(`${this._baseUrl}/employees/dto`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._checkResponse(res));
  }

  getEmployee(id) {
    return axios.get(`${this._baseUrl}/employees/dto/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._checkResponse(res));
  }

  addEmployee(employee) {
    return axios.post(`${this._baseUrl}/employees`, {
      headers: {
        'Content-Type': 'application/json',
      },
      name: employee.name,
      speciality: employee.speciality,
      universityName: employee.university,
      phoneNumber: employee.mainNumber,
      extraPhoneNumber: employee.extraNumber,
      email: employee.email,
      birthday: employee.date,
      registrationAddress: employee.registrationAddress,
      registrationState: employee.registrationState,
      registrationCity: employee.registrationCity,
      livingAddress: employee.livingAddress,
      livingState: employee.livingState,
      livingCity: employee.livingCity,
      office: employee.office,
      roleId: 1,
    })
      .then((res) => this._checkResponse(res));
  }

  getAllStudents() {
    return axios.get(`${this._baseUrl}/students/dto`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._checkResponse(res));
  }

  getStudent(id) {
    return axios.get(`${this._baseUrl}/students/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._checkResponse(res));
  }

  getStudentCourses(id) {
    return axios.get(`${this._baseUrl}/students/${id}/courses`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._checkResponse(res));
  }

  getAllPayments() {
    return axios.get(`${this._baseUrl}/payments/dto`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._checkResponse(res));
  }

  getAllCourses() {
    return axios.get(`${this._baseUrl}/courses/dto`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._checkResponse(res));
  }
}

const api = new Api({
  baseUrl: 'http://localhost:8080',
});

export default api;
