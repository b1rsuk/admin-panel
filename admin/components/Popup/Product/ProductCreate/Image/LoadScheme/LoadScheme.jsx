import style from './loadScheme.module.css';
import ImageCustom from '../../../../../Image/Image';
import { useDispatch, useSelector } from 'react-redux';
import { setArray } from '../../../../../app/redux/arraySlice';
import { useAlert } from 'react-alert';
import toBase64 from './convert/toBase64';

const LoadScheme = ({ product, setProduct }) =>  {
    const dispatch = useDispatch();
    const alert = useAlert()

    return (
        <div className={style.container}>
            <label>
                <input type="file" className={style.uploadPhoto} name='kdm' id="input" onChange={e => toBase64(e, product, alert, setProduct)}/>
                <div className={style.button}>
                    <h3>Добавить Схему</h3>    
                    <ImageCustom src='/plus.svg' width='20px' height='20px' alt='plus'/>
                </div>
            </label>
        </div>
    );
}

export default LoadScheme;