import style from './loadScheme.module.css';
import ImageCustom from '../../../Image/Image';
import { useDispatch, useSelector } from 'react-redux';
import { setArray } from '../../../app/redux/arraySlice';
import { useAlert } from 'react-alert';
import toBase64 from './convert/toBase64';

const LoadButton = ({ setProduct }) =>  {
    const array = useSelector(state => state.array.array);
    const id = useSelector(state => state.popup.id);
    const dispatch = useDispatch();
    const alert = useAlert()

    return (
        <div className={style.container}>
            <label>
                <input type="file" className={style.uploadPhoto} name='kdm' id="input" onChange={e => toBase64(e, array, dispatch, alert, setArray, id, setProduct)}/>
                <div className={style.button}>
                    <h3>Добавить картинку</h3>    
                    <ImageCustom src='/plus.svg' width='20px' height='20px' alt='plus'/>
                </div>
            </label>
        </div>
    );
}

export default LoadButton;