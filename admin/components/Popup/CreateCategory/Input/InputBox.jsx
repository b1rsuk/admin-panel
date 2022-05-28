import style from './inputBox.module.css';
import Input from '../../../Input/Input';

const InputBox = ({value, setValue, anxiety}) => {
    return (
        <div className={style.input}>
            <Input 
                type='text' 
                value={value} 
                onChange={e => setValue(e.target.value)}
                styles={{
                    border: '2px solid var(--gray)',
                    borderRadius: '14px',
                    height: '52px',
                }}
                font={{
                    fontWeight: 500,
                    fontSize: '18px',
                    padding: '8px'
                }}
                anxiety={true}
                rigthSvg={anxiety}
            />
        </div>
    );
}
export default InputBox;