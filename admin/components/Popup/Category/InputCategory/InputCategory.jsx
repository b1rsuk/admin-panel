import Input from '../../../Input/Input';
import { useState } from 'react';
import style from './input.module.css';

const InputCategory = ({ category }) => {
    return (
        <div className={style.input}>
            {
                category.map((e, index) => (
                    <div className={style.category} key={index}>{e}</div>
                ))
            }
        </div>
    );
}
export default InputCategory;