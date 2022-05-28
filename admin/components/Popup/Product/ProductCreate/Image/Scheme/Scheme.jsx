import style from './scheme.module.css';
import Image from 'next/image';
import { useState, Fragment } from 'react';
import deleteScheme from '../../request/deleteScheme';

const Scheme = ({ product, setProduct }) => {
    const [schemeVisible, setSchemeVisible] = useState(0);
    const schemeStyle = {
        opacity: schemeVisible
    }
    console.log(product)
    if (!product) return <Fragment />;
    return (
        <div className={style.scheme} onMouseMove={() => setSchemeVisible(1)} onMouseLeave={() => setSchemeVisible(0)}>
            {product.scheme.map((src, index) => (
                <div className={style.container} key={index}>
                    <div className={style.delete} style={schemeStyle} onClick={() => deleteScheme(src, product, setProduct)}>
                        <Image src={'/minus.svg'} width='20px' height='20px'/>
                    </div>
                    <img src={src} alt='Диван, схема' width={'300px'}  height={'180px'} />
                </div>
            ))}
        </div>
    );
}

export default Scheme;