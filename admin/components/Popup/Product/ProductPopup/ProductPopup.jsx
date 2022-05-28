import Popup from '../../Popup/Popup';
import Image from './Image/Image';
import InputBox from './Input/InputBox';
import style from '../../../../styles/ProductPopup/productPopup.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { visibleProductPopup } from '../../../app/redux/popupSlice';
import { useEffect, useState } from 'react';
import { Fragment } from 'react';

const ProductPopup = ({ category, setCategory }) => {
    const visible = useSelector(state => state.popup.visibleProductPopup);
    const id = useSelector(state => state.popup.id);
    const array = useSelector(state => state.array.array);
    const dispatch = useDispatch(); 
    const [product, setProduct] = useState({});

    useEffect(() => {
        if (!visible) {
            setProduct({});
            setCategory([]);
            return;
        }
        array.forEach(arr => {
            if (arr.id == id) { 
                setProduct(arr);
                setCategory(arr.category);
            } 
        });
    }, [visible]);

    if (Object.keys(product).length == 0) return <Fragment />; 
    return (
        <Popup visible={visible} title='Редактировать категорию' padding='20px' adaptive={style.adaptive} close={() => dispatch(visibleProductPopup())}>
            <div className={style.container}>
                <Image product={product} setProduct={setProduct}/>
                <InputBox visible={visible} category={category} product={product} close={() => dispatch(visibleProductPopup())}/>
            </div>
        </Popup>
    );
}

export default ProductPopup;  