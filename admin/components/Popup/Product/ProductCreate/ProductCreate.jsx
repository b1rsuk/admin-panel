import Popup from '../../Popup/Popup';
import Image from './Image/Image';
import InputBox from './Input/InputBox';
import style from '../../../../styles/ProductPopup/productPopup.module.css';
import { visibleProductCreate } from '../../../app/redux/popupSlice';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCreateProduct } from '../../../app/redux/arraySlice';

const ProductCreate = ({ category }) => {
    const visible = useSelector(state => state.popup.visibleProductCreate);
    const dispatch = useDispatch(); 
    const defaultState = {
        src: [],
        name: '',
        price: [0, 0],
        about: '',
        detalis: '',
        category: category,
        demensions: [],
        scheme: [],
        material: [],
        id: 0
    }
    const [product, setProduct] = useState(defaultState); 
    const close = () => {
        dispatch(setCreateProduct([]));
        dispatch(visibleProductCreate())
    }

    useEffect(() => {
        if (!visible) return;
        dispatch(setCreateProduct([defaultState]));
    }, [visible])

    return (
        <Popup visible={visible} title='Добавить категорию' padding='20px' adaptive={style.adaptive} close={close}>
            <div className={style.container}>
                <Image product={product} setProduct={setProduct}/>
                <InputBox visible={visible} category={category} product={product} setProduct={setProduct} close={close}/>
            </div>
        </Popup>
    );
}

export default ProductCreate;  