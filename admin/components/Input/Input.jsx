import style from './input.module.css';
import ImageCustom from '../Image/Image';
import { Fragment } from 'react';
import Anxiety from '../Anxiety/Anxiety';

const Input = ({ type, value, onChange, styles, font, padding='5px', leftSvg, rigthSvg, anxiety, readOnly, placeholder }) => {
    return (
        <div className={style.container} style={{
            padding: padding,
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
                <input className={style.input} type={type} placeholder={placeholder} value={value} onChange={onChange} style={{
                    borderRadius: styles.borderRadius,
                    ...font
                }}/>
            }
            {rigthSvg? <Anxiety anxiety={anxiety}/> : <Fragment/>}
        </div>
    );
}

export default Input;