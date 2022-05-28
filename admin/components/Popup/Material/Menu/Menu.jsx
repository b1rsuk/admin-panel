import style from './Menu.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setArray, setCreateProduct } from '../../../app/redux/arraySlice';
import delMaterial from '../request/delMaterial';

const Menu = ({name, list, index}) => {
    const [visibleDelete, setVisibleDelete] = useState(0);
    const deleteStyle = {
        opacity: visibleDelete,
    }
    const dispatch = useDispatch();
    const arr = useSelector(select => select.array.array);
    const id = useSelector(select => select.popup.id);
    const createProduct = useSelector(select => select.array.createProduct);
    const create = createProduct.length === 0;
    const copyArr = JSON.parse(JSON.stringify(arr));
    const copyCreate = JSON.parse(JSON.stringify(createProduct));

    const deleteMenu = () => {
        if (!create) {
            copyCreate[0].demensions.splice(index, 1);
            dispatch(setCreateProduct(copyCreate));
            return;
        }
        const newArr = copyArr.map(e => {
            if (e.id == id) {
                e.material.splice(index, 1);
                delMaterial(index);
            }
            return e;
        });

        dispatch(setArray(newArr));
    }
    
    return (
        <div className={style.menu} onMouseMove={() => setVisibleDelete(1)} onMouseLeave={() => setVisibleDelete(0)}>
            <div className={style.delete} style={deleteStyle}>
                <Image src={'/minus.svg'} width='20px' height='20px' onClick={deleteMenu}/>
            </div>
            <h3>{name}:</h3>
            <div className={style.demension}>
                {list.map((e, index) => <h4 key={index}>{e.name}</h4>)}
            </div>
        </div>
    );
}
export default Menu;