import style from './buttons.module.css';
import Button from '../../../Button/Button';
import { setArray } from '../../../app/redux/arraySlice';
import { useDispatch, useSelector } from 'react-redux';
import postDeleteCategory from '../request/postDeleteCategory';

const Buttons = ({ id, close, dell, page }) => {
    const array = useSelector(state => state.array.array);
    const dispatch = useDispatch();
    
    const deleteArray = () => {
        array.forEach((arr, index) => {
            if (arr.id == id) array.splice(index, 1);
        });
        dispatch(setArray(array));
        dell();
        close();
    };
    const value = useSelector(state => state.array.value);
    const deleteCategory = (value, id) => {
        const arrayCopy = JSON.parse(JSON.stringify(array));
        const newArr = arrayCopy.map(e => {
            const list = [];
            e[value].forEach(e => {
                if (e.id == id) {
                    postDeleteCategory(e.id, e.title);
                    return;
                };
                list.push(e);
            });
            e[value] = list;
            return e;   
        });
        dispatch(setArray(newArr));
        close();
    }

    return (
        <div className={style.buttons}>
            <div className={style.container}>
                <Button variant='light' text='Отмена' width='137px' height='34px' w={500} f='14px' click={close}/>
                <Button text='Удалить' width='137px' height='34px' w={500} f='14px' click={page == 'category'? () => deleteCategory(value, id) : deleteArray}/>
            </div>
        </div>
    );
}

export default Buttons;