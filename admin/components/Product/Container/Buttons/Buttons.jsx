import style from './buttons.module.css';
import Button from "../../../Button/Button";
import { visibleProductPopup, visibleDelete, setId } from '../../../app/redux/popupSlice';
import { useDispatch } from 'react-redux';

const Buttons = ({id}) => {
    const dispatch = useDispatch();
    const editingUser = () => {
        dispatch(visibleProductPopup());
        dispatch(setId(id));
    };
    const deleteUser = () => {
        dispatch(visibleDelete());
        dispatch(setId(id));
    };
    
    return (
        <div className={style.container}>
            <Button text='Редактировать' width="177px" height='28px' w={500} f='17px' r='35px' click={editingUser}/>
            <Button variant='delete' text='Удалить' width="137px" height='28px' w={500} f='17px' r='35px' click={deleteUser}/>
        </div>
    );
}

export default Buttons;