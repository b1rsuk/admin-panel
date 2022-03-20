import Button from '../../Button/Button';
import { visibleDelete, setId } from '../../app/redux/popupSlice';
import { useDispatch } from 'react-redux';

const CardsButton = ({ id }) => {
    const dispatch = useDispatch();
    const deleteCards = () => {
        dispatch(visibleDelete());
        dispatch(setId(id));
    }
    return (
        <Button variant='delete' text='Удалить' width='138px' height='35px' w={500} f='17px' click={deleteCards}/>
    );
}

export default CardsButton;