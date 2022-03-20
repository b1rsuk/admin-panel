import style from './input.module.css';
import ImageCustom from '../Image/Image';
import { Fragment } from 'react';
import Anxiety from '../Anxiety/Anxiety';

const Input = ({type, value, onChange, styles, font, leftSvg, rigthSvg, anxiety, readOnly}) => {
    return (
        <div className={style.container} style={{
            ...styles
        }}>
            {leftSvg? <ImageCustom src={leftSvg} alt='forniture planet' width={'24px'} height={'29px'} /> : <Fragment/>}
            {
                readOnly? 
                <input className={style.input} type={type} value={value} onChange={onChange} readOnly="readOnly" style={{
                    borderRadius: styles.borderRadius,
                    ...font
                }}/>
                :
                <input className={style.input} type={type} value={value} onChange={onChange} style={{
                    borderRadius: styles.borderRadius,
                    ...font
                }}/>
            }
            {rigthSvg? <Anxiety anxiety={anxiety}/> : <Fragment/>}
        </div>
    );
}

export default Input;