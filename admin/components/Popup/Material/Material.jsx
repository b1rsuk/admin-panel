import Popup from '../Popup/Popup';
import style from '../../../styles/Demensions/demensions.module.css';
import { visibleAddMaterial, visibleMaterial } from '../../app/redux/popupSlice';
import { useDispatch, useSelector } from 'react-redux';
import Menu from './Menu/Menu';
import ButtonCreate from './Button/Button';
import { Fragment } from 'react';

const Material = () => {
    const visible = useSelector(state => state.popup.visibleMaterial);
    const id = useSelector(state => state.popup.id);
    const arr = useSelector(state => state.array.array);
    const createProduct = useSelector(state => state.array.createProduct);
    const dispatch = useDispatch();
    const close = () => dispatch(visibleMaterial());
    const openAddMaterial = () => dispatch(visibleAddMaterial());
    const create = createProduct.length === 0;
    const product = create? arr.filter(e => e.id == id) : createProduct;

    return (    
        <Popup visible={visible} title='Материалы' padding='35px' marginBottom='20px' zIndex={2} adaptive={style.adaptive} close={close}>
            <div className={style.menu}>
                {
                    product.length == 0? <Fragment /> : product[0].material.map((e, index) => <Menu key={index} name={e.name} list={e.list} index={index}/>)
                }
            </div>
            <ButtonCreate open={openAddMaterial}/>
        </Popup>
    );
}

export default Material;