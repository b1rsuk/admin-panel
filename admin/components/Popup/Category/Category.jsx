import Popup from '../Popup/Popup';
import { visibleCategory } from '../../app/redux/popupSlice';
import { useDispatch, useSelector } from 'react-redux';
import style from '../../../styles/Category/category.module.css';
import { useState, useEffect } from 'react';
import InputCategory from './InputCategory/InputCategory';
import Choice from './Choice/Choice';
import ButtonCategory from './ButtonCategory/ButtonCategory';
import getMenu from './request/getMenu';

const Category = ({ category, setCategory }) => {
    const visible = useSelector(state => state.popup.visibleCategory);
    const dispatch = useDispatch();
    const close = () => dispatch(visibleCategory());
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        if (!visible) return;
        getMenu(setMenu);
    }, [visible])

    return (
        <Popup visible={visible} zIndex={2} title='Выбор категории' centerTitle={true} padding='35px' adaptive={style.adaptive} close={close} marginBottom='28px'>
            <InputCategory category={category}/>
            <Choice category={category} setCategory={setCategory} setMenu={setMenu} menu={menu}/>
            <ButtonCategory setCategory={setCategory} category={category} close={close}/>
        </Popup>   
    );
}
export default Category;