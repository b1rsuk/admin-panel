import style from './form.module.css';

const Form = ({name, price}) => {
    return (
        <div className={style.form}>
            <div className={style.container}>
                <h4>Название:</h4>
                <div className={style.request}>{name}</div>
            </div>
            <div className={style.container}>
                <h4>Цена:</h4>
                <div className={style.request}>{price}</div>
            </div>
        </div>
    );
}

export default Form;