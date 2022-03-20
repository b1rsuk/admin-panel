import style from './buttons.module.css';
import Button from '../../../Button/Button';
import { setArray } from '../../../app/redux/arraySlice';
import { useDispatch, useSelector } from 'react-redux';

const Buttons = ({ id, close, dell }) => {
    const array = useSelector(state => state.array.array).slice();
    const dispatch = useDispatch();
    
    const deleteArray = () => {
        array.forEach((arr, index) => {
            if (arr.id == id) array.splice(index, 1);
        });
        dispatch(setArray(array));
        dell();
        close();
    };

    return (
        <div className={style.buttons}>
            <div className={style.container}>
                <Button variant='light' text='Отмена' width='137px' height='34px' w={500} f='14px' click={close}/>
                <Button text='Удалить' width='137px' height='34px' w={500} f='14px' click={deleteArray}/>
            </div>
        </div>
    );
}

export default Buttons;