import style from '../../styles/SignUp/signUp.module.css';
import SignBox from './SignBox/signBox';

const SignUp = () => {
    return (
        <div className={style.container}>
            <SignBox />
        </div>
    );
}

export default SignUp;