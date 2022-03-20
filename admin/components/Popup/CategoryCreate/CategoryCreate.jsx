import Popup from '../Popup/Popup';
import Input from '../../Input/Input';
import style from '../../../styles/CategoryEdit/CategoryEdit.module.css';
import { useState, useEffect } from 'react';
import Button from '../../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { visibleCategoryCreate } from '../../app/redux/popupSlice';
import { setArray } from '../../app/redux/arraySlice';
import validator from './validator/validator';
import create from './create/create';
import clearAnxiety from './clearAnxiety/clearAnxiety';
import postCreate from '../Product/ProductCreate/request/postCreate';
import { useAlert } from 'react-alert';

const CategoryEdit = () => {
    const visible = useSelector(state => state.popup.visibleCategoryCreate);
    const array = useSelector(state => state.array.array);
    const [name, setName] = useState('');
    const [margin, setMargin] = useState('');
    const [discount, setDiscount] = useState('');

    const [nameAnxiety, setNameAnxiety] = useState(false);
    const [marginAnxiety, setMarginAnxiety] = useState(false);
    const [discountAnxiety, setDiscountAnxiety] = useState(false);
    const alert = useAlert();
    const list = [
        {name: 'Название', value: name, setValue: setName, anxiety: nameAnxiety},
        {name: 'Общая наценка', value: margin, setValue: setMargin, anxiety: marginAnxiety},
        {name: 'Общая скидка', value: discount, setValue: setDiscount, anxiety: discountAnxiety},
    ];

    useEffect(() => {
        if (!visible) return;
        clearAnxiety([setNameAnxiety, setMarginAnxiety, setDiscountAnxiety]);
    }, [visible]);

    const dispatch = useDispatch();
    const close = () => dispatch(visibleCategoryCreate());
    const createCategory = () => create(alert, name, margin, discount, setNameAnxiety, setMarginAnxiety, setDiscountAnxiety, array, dispatch, setArray, validator, close, clearAnxiety);

    return (
        <Popup visible={visible} title='Добавление' padding='35px' adaptive={style.adaptive} marginBottom='30px' close={close}>
            {
                list.map((e, index) => (
                    <div key={index} className={style.input}>
                        <h3>{e.name}</h3>
                        <Input 
                            type='text' 
                            value={e.value} 
                            onChange={r => e.setValue(r.target.value)}
                            styles={{
                                border: '2px solid var(--gray)',
                                borderRadius: '14px',
                                height: '52px',
                            }}
                            font={{
                                fontWeight: 500,
                                fontSize: '18px'
                            }}
                            rigthSvg={true}
                            anxiety={e.anxiety}
                        />
                    </div>
                ))
            }
            <div className={style.save}>
                <Button text='Добавить' width='137px' height='38px' r='26px' w={500} f='16px' click={createCategory}/>
            </div>
        </Popup>
    );
}

export default CategoryEdit;