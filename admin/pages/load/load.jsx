import style from '../../styles/Load/load.module.css';
import { useState } from 'react';
import ImageCustom from '../../components/Image/Image';

const Load = () => {
    const [width, setWidth] = useState('0%');
    setTimeout(() => {
        setWidth('100%');
    }, 1000);
    
    return (
        <div className={style.window}>
            <div className={style.container}>
                <div className={style.load}>
                    <ImageCustom src='/logo.svg' alt='furniture planet' width='236px' height='205px' layout='fixed'/>
                    <h1>Планета
                    мебели!</h1>
                </div>
                <div className={style.progress}>
                    <div className={style.strip} style={{
                        width: width,
                    }}></div>
                </div>
            </div>
        </div>
    );
}
export default Load;