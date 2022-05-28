import style from './button.module.css';
import Button from '../../../Button/Button';

const ButtonCreate = ({open}) => {
    return (
        <div className={style.button}>
            <div className={style.container}>
               <Button text='Добавить' width='100%' height='40px' w={500} f='18px' r='20px' click={open}/>
            </div>
        </div>
    );
}
export default ButtonCreate;