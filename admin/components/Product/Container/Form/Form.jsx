import style from './form.module.css';

const Form = ({name, price}) => {
    const isDiscount = price.discount > 0; 
    const priceStyle = {
        color: isDiscount? 'var(--red)' : '',
    }
    console.log(price)
    return (
        <div className={style.form}>
            <div className={style.container}>
                <h4>Название:</h4>
                <div className={style.request}>{name}</div>
            </div>
            <div className={style.container}>
                <h4>Цена:</h4>
                <div style={priceStyle} className={style.request}>{price.price} {isDiscount? <div className={style.discount}>{price.discount}</div> : ''} </div>
            </div>
        </div>
    );
}

export default Form;