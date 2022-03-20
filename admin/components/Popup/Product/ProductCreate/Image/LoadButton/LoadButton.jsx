import style from './loadButton.module.css';
import ImageCustom from '../../../../../Image/Image';
import toBase64 from './convert/toBase64';
import { useDispatch, useSelector } from 'react-redux';
import { setArray } from '../../../../../app/redux/arraySlice';

const LoadButton = ({ product, setProduct }) =>  {
    const array = useSelector(state => state.array.array);
    const id = useSelector(state => state.popup.id);
    const dispatch = useDispatch();

    return (
        <div className={style.container}>
            <label>
                <input type="file" className={style.uploadPhoto} name='kdm' id="input" onChange={e => toBase64(e, product, setProduct)}/>
                <div className={style.button}>
                    <h3>Добавить фото</h3>    
                    <ImageCustom src='/plus.svg' width='20px' height='20px' alt='plus'/>
                </div>
            </label>
        </div>
    );
}

export default LoadButton;