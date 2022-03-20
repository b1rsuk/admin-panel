import Button from "../Button/Button";
import style from '../../styles/ButtonCreate/buttonCreate.module.css';
import { visibleProductCreate, visibleCategoryCreate } from '../app/redux/popupSlice';
import { useDispatch } from 'react-redux';
import { Fragment } from "react";

const ButtonCreate = ({ variant }) => {
    if (variant != 'category' && variant != 'position') return <Fragment />;
    const dispatch = useDispatch();
    
    return (
        <div className={style.container}>
            <div className={style.button}>
                {variant == 'category'? 
                <Button width="100%" height='100%' text='Добавить категорию' w={700} f='22px' r='30px' click={() => dispatch(visibleCategoryCreate())}/>
                : 
                variant == 'position'? 
                <Button width="100%" height='100%' text='Добавить позицию' w={700} f='22px' r='30px' click={() => dispatch(visibleProductCreate())}/> : <Fragment/>
                }
            </div>
        </div>
    );
}

export default ButtonCreate; 