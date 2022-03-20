import style from './buttons.module.css';
import Button from '../../../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setArray } from '../../../app/redux/arraySlice';
import saveUser from './saveUser/saveUser';

const Buttons = ({ login, password, sum, fullName, birchDay, status, close, readyValidator, readyClearAnxiety, response }) => {
    const dispatch = useDispatch();
    const id = useSelector(state => state.popup.id);
    const array = useSelector(state => state.array.array);
    const save = () => {
        readyClearAnxiety();
        if (readyValidator()) {
            saveUser(login, password, sum, fullName, birchDay, status, dispatch, setArray, array, id, close);
            response();
        }
    }
    return (
        <div className={style.buttons}>
            <div className={style.container}>
                <Button variant='light' text='Сбросить' width='181px' height='52px' w={500} f='18px' r='26px'/>
                <Button text='Применить' width='181px' height='52px' w={500} f='18px' r='26px' click={save}/>
            </div>
        </div> 
    );
}

export default Buttons;