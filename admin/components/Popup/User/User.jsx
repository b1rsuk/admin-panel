import Popup from "../Popup/Popup";
import InputUser from './InputUser/InputUser';
import { useState, useEffect } from "react";
import Buttons from "./Buttons/Buttons";
import style from '../../../styles/User/user.module.css';
import { visibleUser } from '../../app/redux/popupSlice';
import { useDispatch, useSelector } from 'react-redux';
import validator from "./validator/validator";
import clearAnxiety from "./clearAnxiety/clearAnxiety";
import postSave from "./request/postSave";
import { useAlert } from "react-alert";

const User = () => {
    const visible = useSelector(state => state.popup.visibleUser);
    const array = useSelector(state => state.array.array);
    const id = useSelector(state => state.popup.id);
    const dispatch = useDispatch();
    const alert = useAlert();

    const [login , setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [sum, setSum] = useState('');

    const [fullName, setFullName] = useState(''); 
    const [birchDay, setBirchDay] = useState('');
    const [status, setStatus] = useState('');

    const [loginAnxiety, setLoginAnxiety] = useState(false);
    const [passwordAnxiety, setPasswordAnxiety] = useState(false);
    const [sumAnxiety, setSumAnxiety] = useState(false);

    const [fullNameAnxiety, setFullNameAnxiety] = useState(false);
    const [birchDayAnxiety, setBirchDayAnxiety] = useState(false);
    const [statusAnxiety, setStatusAnxiety] = useState(false);

    const readyClearAnxiety = () => clearAnxiety([setLoginAnxiety, setPasswordAnxiety, setSumAnxiety, setFullNameAnxiety, setBirchDayAnxiety, setStatusAnxiety]);
    const readyResponse = () => postSave(login, password, sum, fullName, birchDay, status, id);
    
    useEffect(() => {
        if (!visible) return;
        array.forEach(e => {
            if (e.one == id) {
                setLogin(e.two);
                setPassword(e.user.password);
                setSum(e.three);
                setFullName(e.user.fullName);
                setBirchDay(e.user.birchDay);
                setStatus(e.four);
            }
        });
    }, [visible])
    
    const form1 = [
        {name: 'Логин', value: login, setValue: setLogin, anxiety: loginAnxiety},
        {name: 'Пароль', value: password, setValue: setPassword, anxiety: passwordAnxiety},
        {name: 'Сума', value: sum, setValue: setSum, anxiety: sumAnxiety},
    ];
    
    const form2 = [
        {name: 'Ф. И. О.', value: fullName, setValue: setFullName, anxiety: fullNameAnxiety},
        {name: 'Дата рождения', value: birchDay, setValue: setBirchDay, anxiety: birchDayAnxiety},
        {name: 'Статус', value: status, setValue: setStatus, anxiety: statusAnxiety},
    ];

    const close = () => dispatch(visibleUser());
    const readyValidator = () => validator(alert, login, password, sum, fullName, birchDay, status, setLoginAnxiety, setPasswordAnxiety, setSumAnxiety, setFullNameAnxiety, setBirchDayAnxiety, setStatusAnxiety);

    return (
        <Popup visible={visible} title='Изменить пользователя' padding='20px' adaptive={style.adaptive} close={close}>
            <InputUser form={form1} form2={form2}/> 
            <Buttons login={login} password={password} sum={sum} fullName={fullName} birchDay={birchDay} status={status} close={close} readyValidator={readyValidator} readyClearAnxiety={readyClearAnxiety} response={readyResponse}/>
        </Popup>
    );
}

export default User;