import style from './image.module.css';
import NavBar from '../Image/NavBar/NavBar';
import Pagination from './Pagination/Pagination';
import LoadButton from './LoadButton/LoadButton';
import { useState } from 'react';
import Scheme from './Scheme/Scheme';
import LoadScheme from './LoadScheme/LoadScheme';

const Image = ({ product, setProduct }) => {
    const [arrow, setArrow] = useState(0);
    return (
        <div className={style.container}>
            <NavBar product={product} arrow={arrow} setArrow={setArrow} setProduct={setProduct} />    
            <Pagination product={product} arrow={arrow} setArrow={setArrow}/>
            <LoadButton setProduct={setProduct}/>
            <Scheme product={product} setProduct={setProduct}/>
            <LoadScheme setProduct={setProduct}/>
        </div>
    );
}

export default Image;