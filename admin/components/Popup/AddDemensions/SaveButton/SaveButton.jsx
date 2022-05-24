import style from './saveButton.module.css';
import Button from '../../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setArray } from '../../../app/redux/arraySlice';
import { useAlert } from "react-alert";

const SaveButton = ({input, setInput, menu, setMenu, name, setName, close}) => {
    const dispatch = useDispatch();
    const arr = useSelector(select => select.array.array);
    const id = useSelector(state => state.popup.id);
    const copyArr = JSON.parse(JSON.stringify(arr));
    const alert = useAlert();
    const save = () => {
        const list = [];
        Object.entries(input).forEach(e => list.push(e[1]));
        const emptyCheck = list.every(e => e.name != '' && e.value != '' && name != '');
        if (!emptyCheck) return alert.error('Не все поля заполненые');
        console.log(copyArr)
        const searchArr = copyArr.map(e => {
           // if (!e.demensions[0].id) e.demensions.push({name: name, list: list, id: 0});
           // else if (e.demensions[0].id == id) e.demensions.push({name: name, list: list, id: e.demensions[e.demensions.length - 1].id + 1});
            return e;
        });
        dispatch(setArray(searchArr));
        close();
    }
    
    return (
        <div className={style.saveButton}>
            <Button text='Сохранить' width='170px' height='30px' w={500} f='15px' r='10px' click={save}/>
        </div>
    );
}
export default SaveButton;