import style from './tableCategory.module.css';
import { useEffect, useState } from 'react';
import getCategory from './getCategory/getCategory';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { visibleCreateCategory } from '../app/redux/popupSlice';
import { setId } from '../app/redux/popupSlice';
import { visibleDelete } from '../app/redux/popupSlice';
import { setArray, setValue } from '../app/redux/arraySlice';

const TableCategory = ({menuByName, setMenuByName}) => {
    const dispatch = useDispatch();
    useEffect(() => getCategory(setArray, dispatch), []);
    const table = useSelector(state => state.array.array);
    const [add, setAdd] = useState(0);
    const [dell, setDell] = useState(0);
    const styleAdd = {
        opacity: add,
    }
    const styleDelete = {
        opacity: dell
    }
    const createCategory = () => dispatch(visibleCreateCategory());
    const deleted = (event, e, menuByName) => {
        event.stopPropagation(); 
        dispatch(setId(e.id));
        dispatch(setValue(menuByName))
        dispatch(visibleDelete());
    }
    
    return (
        <div className={style.tableCategory}>
            <div className={style.table} onMouseMove={() => setAdd(1)} onMouseLeave={() => setAdd(0)}>
              <div className={style.add} style={styleAdd}>
                  <Image src='/plus.svg' width='50px' height='50px' onClick={createCategory}/>
              </div>
              <div className={style.container} onClick={() => setMenuByName('')}>Сбросить</div>
                {table.map(e => { 
                    return e[menuByName].map((e, index) => 
                    <div key={index} className={style.container} onMouseMove={() => setDell(1)} onMouseLeave={() => setDell(0)} onClick={() => setMenuByName(e.title)}>
                        {e.title}
                        <div className={style.delete} style={styleDelete} onClick={event => deleted(event, e, menuByName)}>
                            <Image src={'/minus.svg'} width='20px' height='20px'/>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    );
}
export default TableCategory;