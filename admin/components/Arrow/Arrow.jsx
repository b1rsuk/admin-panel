import style from '../../styles/Arrow/arrow.module.css';
import { Fragment } from 'react';

const Arrow = ({variant, click}) => {
    return (
        variant == 'left'? <span onClick={click} className={style.arrow}>&#8249;</span> : variant == 'right'? <span onClick={click} className={style.arrow}>&#8250;</span> : <Fragment />
    );
}

export default Arrow;