import style from '../../../styles/SignUp/SignBox/signBox.module.css';
import Button from '../../../components/Button/Button';
import InputBox from '../inputBox/InpuBox';
import { useState } from 'react';
import postAuth from '../request/postAuth';
import { useAlert } from 'react-alert';
import { useRouter } from 'next/router';

const signBox = () => {
    const alert = useAlert();
    const router = useRouter();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [anxietyPassword, setAnxietyPassword] = useState(false);

    return (
        <form onSubmit={e => {
            e.preventDefault();
        }}>
            <div className={style.box}>
                <h1>Авторизация</h1>
                <div className={style.container}>
                    <InputBox setUser={setUser} setPassword={setPassword} anxietyPassword={anxietyPassword}/>
                </div>
                <Button text='Вход' w={700} f='36px' width='507px' height='72px' style={{
                    display: 'block',
                    margin: '0 auto'
                }} click={() => postAuth(user, password, setAnxietyPassword, alert, router)}/>
            </div>
        </form>     
    );
}

export default signBox;