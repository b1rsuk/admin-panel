import Button from '../../Button/Button';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { visibleNote, visibleUser, visibleDelete, setId } from '../../app/redux/popupSlice';

const UserButton = ({ id }) => {
    const style = {
        marginLeft: '3px',
        marginRight: '3px'
    };
    const dispatch = useDispatch();

    const note = () => {
        dispatch(visibleNote());
        dispatch(setId(id));
    }

    const edit = () => {
        dispatch(visibleUser());
        dispatch(setId(id));
    }

    const deleteUser = () => {
        dispatch(visibleDelete());
        dispatch(setId(id));
    }

    return (
        <Fragment>
            <Button variant='light' text='Заметка' width='138px' height='35px' w={500} f='17px' style={style} click={note}/>
            <Button text='Изменить' width='138px' height='35px' w={500} f='17px' style={style} click={edit}/>
            <Button variant='delete' text='Удалить' width='138px' height='35px' w={500} f='17px' style={style} click={deleteUser}/>
        </Fragment>        
    );
}

export default UserButton;