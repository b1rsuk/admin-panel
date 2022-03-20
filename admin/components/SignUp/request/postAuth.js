import axios from 'axios';

const postAuth = async(user, password, setAnxietyPassword, alert, router) => {
    const request = await axios.post(process.env.postAuth, {
        user: user,
        password: password
    });
    if (!request.data) {
        setAnxietyPassword(true);
        alert.error('Неправильный логин/пароль');
        return;
    }
    router.push('/table/users?id=0');
}

export default postAuth;