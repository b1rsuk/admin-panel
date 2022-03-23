import Popup from '../../../components/Popup/Popup/Popup';
import Text from './Text/Text';
import Button from '../../Button/Button';
import style from '../../../styles/Note/note.module.css';
import { visibleNote } from '../../app/redux/popupSlice';
import { setArray } from '../../app/redux/arraySlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import saveNote from './saveNote/saveNote';
import postNote from './request/postNote';

const Note = () => {
    const visible = useSelector(state => state.popup.visibleNote);
    const id = useSelector(state => state.popup.id);
    const array = useSelector(state => state.array.array);
    const dispatch = useDispatch(); 
    const [textArea, setTextArea] = useState('');
    const close = () => dispatch(visibleNote());
    const save = () => {
        saveNote(textArea, id, array, dispatch, setArray);
        postNote(textArea, id);
        close(); 
    }   
    useEffect(() => {
        array.forEach(e => {
            if (e.user.id == id) setTextArea(e.user.note);
        });
    }, [visible]);
    return (
        <Popup visible={visible} title='Заметка' padding='30px' marginBottom='50px' adaptive={style.adaptive} close={close}>
            <Text textArea={textArea} setTextArea={setTextArea}/>
            <div className={style.button}>
                <Button text='Сохранить' width='181px' height='52px' w={500} f='18px' r='26px' click={save}/>
            </div>
        </Popup>
    );
}

export default Note; 