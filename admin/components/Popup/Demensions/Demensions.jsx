import Popup from '../Popup/Popup';
import style from '../../../styles/Demensions/demensions.module.css';
import { visibleDemensions, visibleAddDemensions } from '../../app/redux/popupSlice';
import { useDispatch, useSelector } from 'react-redux';
import Menu from './Menu/Menu';
import ButtonCreate from './Button/Button';
import { Fragment } from 'react';

const Demensions = () => {
    const visible = useSelector(state => state.popup.visibleDemensions);
    const id = useSelector(state => state.popup.id);
    const arr = useSelector(state => state.array.array);
    const dispatch = useDispatch();
    const close = () => dispatch(visibleDemensions());
    const openAddDemension = () => dispatch(visibleAddDemensions());
    const product = arr.filter(e => e.id == id);
    return (    
        <Popup visible={visible} title='Размеры' padding='35px' marginBottom='20px' zIndex={2} adaptive={style.adaptive} close={close}>
            <div className={style.menu}>
                {
                    product.length == 0? <Fragment /> : product[0].demensions.map((e, index) => <Menu key={index} name={e.name} list={e.list}/>)
                }
            </div>
            <ButtonCreate open={openAddDemension}/>
        </Popup>
    );
}

export default Demensions;