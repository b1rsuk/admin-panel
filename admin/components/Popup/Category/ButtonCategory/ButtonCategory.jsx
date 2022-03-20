import style from './buttonCategory.module.css';
import Button from '../../../Button/Button';

const ButtonCategory = ({ setCategory, category, close }) => {
    return (
        <div className={style.container}>
            <div className={style.button}>
                <Button text='Отмена' variant='light' width='137px' height='34px' w={500} f='14px' r='26px' click={close}/>
                <Button text='Сохранить' width='137px' height='34px' w={500} f='14px' r='26px' click={() => {
                    setCategory(category);
                    close();
                }}/>
            </div>
        </div>
    );
}

export default ButtonCategory;