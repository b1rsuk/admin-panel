import style from './inputBox.module.css';
import Input from '../../../../Input/Input';
import { useState, useEffect } from 'react';
import TextArea from '../../../../TextArea/TextArea';
import Button from '../../../../Button/Button';
import validator from './validator/validator';
import clearAnxiety from './clearAnxiety/clearAnxiety';
import { visibleCategory, visibleDemensions } from '../../../../app/redux/popupSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setArray } from '../../../../app/redux/arraySlice';
import { useAlert } from 'react-alert';

const InputBox = ({ visible, category, product, close }) => {
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [about, setAbout] = useState(product.about);
    const [detalis, setDetalis] = useState(product.detalis);

    const [nameAnxiety, setNameAnxiety] = useState(false);
    const [priceAnxiety, setPriceAnxiety] = useState(false);
    const [aboutAnxiety, setAboutAnxiety] = useState(false);
 
    const input = [
        {name: 'Название', value: name, setValue: setName, anxiety: nameAnxiety},
        {name: 'Цена', value: price, setValue: setPrice, anxiety: priceAnxiety},
        {name: 'Описание', value: about, setValue: setAbout, anxiety: aboutAnxiety},
    ];
    
    useEffect(() => {
        if (visible) return;
        clearAnxiety([setNameAnxiety, setPriceAnxiety, setAboutAnxiety]);
    }, [visible])

    const dispatch = useDispatch();
    const array = useSelector(state => state.array.array);
    const alert = useAlert();

    return (
        <div className={style.container}>
            {
                input.map((input, index) => (
                    <div key={index} className={style.input}>
                        <div className={style.text}>
                            <h3>{input.name}</h3>
                        </div>
                        <Input 
                            type='text' 
                            value={input.value} 
                            onChange={e => input.setValue(e.target.value)}
                            styles={{
                                border: '2px solid var(--gray)',
                                borderRadius: '14px',
                                height: '52px',
                            }}
                            font={{
                                fontWeight: 500,
                                fontSize: '18px',
                                padding: '8px'
                            }}
                            rigthSvg={input.anxiety}
                            anxiety={true}
                        />
                 </div>
                ))
            }
            <div className={style.input}>
                <div className={style.text}>
                    <h3>Категория</h3>
                </div>
                <Button text='Редактировать' width='100%' height='40px' w={500} f='18px' r='20px' click={() => dispatch(visibleCategory())}/>
            </div>
            <div className={style.input}>
                <div className={style.text}>
                    <h3>Размеры</h3>
                </div>
                <Button text='Размеры' width='100%' height='40px' w={500} f='18px' r='20px' click={() => dispatch(visibleDemensions())}/>
            </div>
            
            <div className={style.textArea}>
                <div className={style.text}>
                    <h3>Подробнее</h3>
                </div>
                <TextArea value={detalis} setValue={e => setDetalis(e.target.value)}/>
            </div>
            <div className={style.buttonSave}>
               <Button text='Применить' width='181px' height='52px' w={500} f='18px' r='26px' click={() => {
                   clearAnxiety([setNameAnxiety, setPriceAnxiety, setAboutAnxiety]);
                   validator(name, price, about, detalis, category, setNameAnxiety, setPriceAnxiety, setAboutAnxiety, close, alert, product, dispatch, setArray, array);
               }}/>
            </div>
        </div>
    );
}

export default InputBox;