const validator = (alert, login, password, sum, fullName, birchDay, status, setLoginAnxiety, setPasswordAnxiety, setSumAnxiety, setFullNameAnxiety, setBirchDayAnxiety, setStatusAnxiety) => {
    if (login.trim() == '') {
        setLoginAnxiety(true);
        alert.error('Логин не может быть пустым');
        return;
    }
    if (password.trim() == '') {
        setPasswordAnxiety(true);
        alert.error('Пароль не может быть пустым');
        return;
    }
    if (!Number(sum) && sum !== '0') {
        setSumAnxiety(true);
        alert.error('Сума может содержать только цифры');
        return;
    }
    if (fullName.trim() == '') {
        setFullNameAnxiety(true);
        alert.error('ФИО не может быть пустым');
        return;
    }
    if (birchDay.trim() == '') {
        setBirchDayAnxiety(true);
        alert.error('День рождения не может быть пустым');
        return;
    }
    if (status.trim() == '') {
        setStatusAnxiety(true);
        alert.error('Статус не может быть пустым');
        return;
    }
    return true;
}

export default validator;

