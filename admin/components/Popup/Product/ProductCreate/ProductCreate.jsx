import Popup from '../../Popup/Popup';
import Image from './Image/Image';
import InputBox from './Input/InputBox';
import style from '../../../../styles/ProductPopup/productPopup.module.css';
import { useSelector } from 'react-redux';
import { visibleProductCreate } from '../../../app/redux/popupSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const ProductCreate = ({ category, setCategory }) => {
    const visible = useSelector(state => state.popup.visibleProductCreate);
    const dispatch = useDispatch(); 
    const defaultState = {
        src: [],
        name: '',
        price: '',
        about: '',
        detalis: '',
        category: category,
        id: 0
    }
    const [product, setProduct] = useState(defaultState); 

    return (
        <Popup visible={visible} title='Добавить категорию' padding='20px' adaptive={style.adaptive} close={() => dispatch(visibleProductCreate())}>
            <div className={style.container}>
                <Image product={product} setProduct={setProduct}/>
                <InputBox visible={visible} category={category} product={product} setProduct={setProduct} close={() => dispatch(visibleProductCreate())}/>
            </div>
        </Popup>
    );
}

export default ProductCreate;  