import ImageCustom from "../../../../../Image/Image";
import Arrow from '../../../../../Arrow/Arrow';
import style from './pagination.module.css';
import left from './left/left';
import right from './right/right';

const Pagination = ({ product, arrow, setArrow }) => {
    if (product.src.length == 0) return <div className={style.empty}/>;
    return (
        <div className={style.container}>   
            <Arrow variant='left' click={() => left(arrow, setArrow)}/>
            <ImageCustom src={product.src[arrow]} width='254px' height='120px' alt='divan'/>
            <Arrow variant='right' click={() => right(arrow, setArrow, product.src.length-1)}/>
        </div>
    );
}

export default Pagination;