import Button from '../../Button/Button';
import { Fragment } from 'react';
import { visibleDelete, visibleCategoryEdit, setId } from '../../app/redux/popupSlice';
import { useDispatch } from 'react-redux';

const CategoryButton = ({ id }) => {
    const dispatch = useDispatch();
    const style = {
        marginLeft: '3px',
        marginRight: '3px'
    };
    const deleteCategry = () => {
        dispatch(setId(id));
        dispatch(visibleDelete());
    }
    const edit = () => {
        dispatch(visibleCategoryEdit());
        dispatch(setId(id));
    }
    
    return (
        <Fragment>
            <Button text='Редактировать' width='138px' height='35px' w={500} f='17px' style={style} click={edit}/>
            <Button variant='delete' text='Удалить' width='138px' height='35px' w={500} f='17px' style={style} click={deleteCategry}/>
        </Fragment>
    );
};

export default CategoryButton;