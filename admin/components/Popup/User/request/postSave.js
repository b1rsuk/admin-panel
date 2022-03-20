import axios from 'axios';

const postSave = (login, password, sum, fullName, birchDay, status, id) => axios.post(process.env.saveUser, {
    login: login,
    password: password,
    sum: sum,
    fullName: fullName,
    birchDay: birchDay,
    status: status,
    id: id,
});

export default postSave;

