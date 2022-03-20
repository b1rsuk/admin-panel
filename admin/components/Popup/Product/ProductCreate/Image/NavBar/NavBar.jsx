import style from './navBar.module.css';
import ImageCustom from '../../../../../Image/Image';
import deleteImage from './deleteImage/deleteImage';
import { useDispatch, useSelector } from 'react-redux';
import { setArray } from '../../../../../app/redux/arraySlice';

const NavBar = ({ product, arrow, setArrow, setProduct }) => {
    const dispatch = useDispatch();
    const array = useSelector(state => state.array.array);
    return (
        <div className={style.navbar} onClick={() => deleteImage(product, arrow, setArrow, setProduct)}>
            <ImageCustom src='/close.svg' alt='close' width='20px' height='16px'/>
        </div>
    );
}

export default NavBar;