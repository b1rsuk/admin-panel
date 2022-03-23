import style from './fastPagination.module.css';
import Input from '../../Input/Input';
import { useState } from 'react';
import { useAlert } from 'react-alert';
import { useRouter } from 'next/router';
import Button from '../../Button/Button';
import { visibleFastPagination } from '../../app/redux/popupSlice';
import { useDispatch, useSelector } from 'react-redux';

const FastPagination = ({ limit, page }) => {
    const [number, setNumber] = useState('');
    const alert = useAlert();
    const router = useRouter();
    const dispath = useDispatch();
    const visible = useSelector(state => state.popup.visibleFastPagination);

    return (
        <div style={{display: visible? 'flex' : 'none'}} className={style.fastPagination} onClick={() => dispath(visibleFastPagination())}>
            <form onClick={e => e.stopPropagation()} onSubmit={e => e.preventDefault()}>
                <div className={style.container}>
                    <Input
                        styles={{
                            borderRadius: '14px',
                            height: '52px',
                            width: '100px',
                            border: '1px solid var(--text)'
                        }}
                        font={{
                            fontWeight: 500,
                            fontSize: '18px',
                            padding: '8px'
                        }}
                        padding='0'
                        placeholder={'№'}
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                    />
                    <Button text='OK' w={700} f='10px' width='50px' height='45px' r='5px' click={() => {
                        if (Number(number) <= 0) return alert.error(`Такой страницы не может существовать`);
                        if (Number(number) > limit+1 || !Number(number) && number != '0') return alert.error(`Максимальная страница: ${limit+1}`);
                        router.push(page + String(number - 1));
                        dispath(visibleFastPagination());
                    }}/> 
                </div>
            </form>
        </div>
    );
}

export default FastPagination;