import styleButton from './button.module.css';
import { memo } from 'react';

const Button = ({variant, text, width = '150px', height, click, f, w, r = '26px', style}) => {
    return (
        <button onClick={
            click
        } style={{
            borderRadius: r,
            width: width,
            height: height,
            fontSize: f,
            fontWeight: w,
            ...style
        }} className={`${styleButton.button} ${variant == 'delete'? styleButton.delete : variant == 'light'? styleButton.light : styleButton.green}`}>{text}</button>
    )
}
export default memo(Button);