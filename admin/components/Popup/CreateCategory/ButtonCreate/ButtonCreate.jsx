import style from './buttonCreate.module.css';
import Button from '../../../Button/Button';
import validator from '../validator';

const ButtonCreate = ({margin, title, discount, setMarginAnxiety, setDiscountAnxiety, setTitleAnxiety, create, close}) => {
    const btnCreate = () => {
         if (!validator(margin, title, discount, setMarginAnxiety, setDiscountAnxiety, setTitleAnxiety) === true) return;
         create();
         close();
    }
    return (
        <div className={style.button}>
            <div className={style.container}>
             <Button text='Добавить' width='100%' height='40px' w={500} f='18px' r='20px' click={btnCreate}/>
            </div>
        </div>
    );
}
export default ButtonCreate;