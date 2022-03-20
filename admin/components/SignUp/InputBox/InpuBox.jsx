import Input from '../../../components/Input/Input';
import style from './inputBox.module.css';

const InputBox = ({setUser, setPassword, anxietyPassword}) => {
    return (
        <div className={style.inputBox}>
            <Input 
                type='text' 
                styles={{
                    border: '3px solid var(--gray)',
                    borderRadius: '26px',
                    height: '65px',
                    marginBottom: '32px'
                }}
                font={{
                    fontWeight: 500,
                    fontSize: '18px'
                }}
                leftSvg={'/input/user.svg'}
                onChange={e => setUser(e.target.value)}
            />
            <Input 
                type='text' 
                styles={{
                    border: '3px solid var(--gray)',
                    borderRadius: '26px',
                    height: '65px',
                }}
                font={{
                    fontWeight: 500,
                    fontSize: '18px'
                }}
                leftSvg={'/input/lock.svg'}
                onChange={e => setPassword(e.target.value)}
                rigthSvg={true}
                anxiety={anxietyPassword}
            />
        </div>
    );
}

export default InputBox;