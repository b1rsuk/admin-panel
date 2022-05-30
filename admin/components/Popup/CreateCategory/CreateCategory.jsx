import Popup from '../Popup/Popup';
import { visibleCreateCategory } from '../../app/redux/popupSlice';
import { useDispatch, useSelector } from 'react-redux';
import style from './createCategory.module.css';
import InputBox from './Input/InputBox';
import { useEffect, useState } from 'react';
import InputList from './InputList/InputLIst';
import ButtonCreate from './ButtonCreate/ButtonCreate';
import { setArray } from '../../app/redux/arraySlice';
import postCreateCategory from './request/postCreateCategory';
import translit from '../Product/translit';

const CreateCategory = ({menuByName}) => {
    const visible = useSelector(state => state.popup.visibleCreateCategory);
    const dispatch = useDispatch();

    const table = useSelector(state => state.array.array);
    const close = () => dispatch(visibleCreateCategory());
    const [title, setTitle] = useState('');

    const [margin, setMargin] = useState('');
    const [discount, setDiscount] = useState('');
    
    const [marginAnxiety, setMarginAnxiety] = useState(false);
    const [discountAnxiety, setDiscountAnxiety] = useState(false);
    const [titleAnxiety, setTitleAnxiety] = useState(false);

    useEffect(() => {
        if (!visible) return;
        setDiscountAnxiety(false);
        setMarginAnxiety(false);
    }, [visible]);

    const list = [
        {name: 'Общая наценка', value: margin, setValue: setMargin, anxiety: marginAnxiety},
        {name: 'Общая скидка', value: discount, setValue: setDiscount, anxiety: discountAnxiety},
    ];
    const create = () => {
        const copyTable = JSON.parse(JSON.stringify(table));
        const newTable = copyTable.map(e => { 
            if (menuByName in e) {
                let id = 0;
                for (const key in e) {
                    e[key].forEach(e => {
                        if (e.id > id) id = e.id;
                    });
                }
                e[title] = [];
                e[menuByName].push({title: title, marginAndDiscount: [margin, discount], label: translit(title), id: id+1});
                postCreateCategory(menuByName, {title: title, marginAndDiscount: [margin, discount], label: translit(title), id: id+1});   
            }
            return e;
        });
        console.log(menuByName, newTable)
        dispatch(setArray(newTable));
    }

    return (
        <Popup visible={visible} zIndex={2} title='Добавить раздел' centerTitle={true} padding='35px' adaptive={style.adaptive} close={close} marginBottom='28px'>
            <InputBox value={title} setValue={setTitle} anxiety={titleAnxiety}/>
            <InputList list={list}/>
            <ButtonCreate margin={margin} title={title}  discount={discount} setMarginAnxiety={setMarginAnxiety} setDiscountAnxiety={setDiscountAnxiety} setTitleAnxiety={setTitleAnxiety} create={create} close={close}/>
        </Popup>    
    );
}
export default CreateCategory;