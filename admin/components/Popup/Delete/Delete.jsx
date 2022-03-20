import Popup from '../Popup/Popup';
import Main from './Main/Main';
import Buttons from './Buttons/Buttons';
import style from '../../../styles/Delete/delete.module.css';
import { visibleDelete } from '../../app/redux/popupSlice';
import { useDispatch, useSelector } from 'react-redux';
import postDelete from './request/postDelete';

const Delete = ({ page }) => {
    const visible = useSelector(state => state.popup.visibleDelete);
    const id = useSelector(state => state.popup.id);
    const dispatch = useDispatch();
    const close = () => dispatch(visibleDelete());

    return (    
        <Popup visible={visible} title='Удаление данных' centerTitle={true} padding='35px' adaptive={style.adaptive} close={close}>
            <Main/>
            <Buttons id={id} close={close} dell={() => postDelete(page, id)}/>
        </Popup>
    );
}

export default Delete;