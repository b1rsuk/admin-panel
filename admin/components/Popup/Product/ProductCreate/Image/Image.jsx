import style from './image.module.css';
import NavBar from '../Image/NavBar/NavBar';
import Pagination from './Pagination/Pagination';
import LoadButton from './LoadButton/LoadButton';
import { useState } from 'react';

const Image = ({ product, setProduct }) => {
    const [arrow, setArrow] = useState(0);
    return (
        <div className={style.container}>
            <NavBar product={product} arrow={arrow} setArrow={setArrow} setProduct={setProduct} />    
            <Pagination product={product} arrow={arrow} setArrow={setArrow}/>
            <LoadButton product={product} setProduct={setProduct}/>
        </div>
    );
}

export default Image;