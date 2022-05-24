import style from './saveButton.module.css';
import Button from '../../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setArray } from '../../../app/redux/arraySlice';
import { useAlert } from "react-alert";
import { setCreateProduct } from '../../../app/redux/arraySlice';

const SaveButton = ({input, setInput, menu, setMenu, name, setName, close}) => {
    const dispatch = useDispatch();
    const arr = useSelector(select => select.array.array);
    const id = useSelector(state => state.popup.id);
    const productCreate = useSelector(state => state.array.createProduct);
    const copyArr = JSON.parse(JSON.stringify(arr));
    const alert = useAlert();
    const create = productCreate.length === 0;
    const copyProduct = JSON.parse(JSON.stringify(productCreate));
    
    const save = () => {
        const list = [];
        Object.entries(input).forEach(e => list.push(e[1]));
        const emptyCheck = list.every(e => e.name != '' && e.value != '' && name != '');
        if (!emptyCheck) return alert.error('Не все поля заполненые');
        if (!create) {
            copyProduct[0].demensions.push({name: name, list: list});
            dispatch(setCreateProduct(copyProduct));
            close();
            return;
        }
        const searchArr = copyArr.map(e => {
            if (e.id == id) e.demensions.push({name: name, list: list});
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