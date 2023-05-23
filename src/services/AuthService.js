import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:80',
    headers: {
        'Content-type': 'application/json'
    }
});

export default class AuthService {

    login(data) {
        api.post('/login', data).then(response => {
            localStorage.setItem('token', response.data?.token);
        }).catch(error => {
            console.log(error.status);
        });
    }

    register(data) {
        api.post('/registration', data).then(response => {
            alert(response.status);
        });
    }

}


