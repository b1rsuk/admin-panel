import Popup from '../Popup/Popup';
import style from '../../../styles/AddDemensions/addDemensions.module.css';
import NameWindows from './NameWindows/NameWindows';
import Menu from './Menu/Menu';
import SaveButton from './SaveButton/SaveButton';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { visibleAddDemensions } from '../../app/redux/popupSlice';

const AddDemensions = () => {
    const [name, setName] = useState('');
    const [input, setInput] = useState({}); 
    const [menu, setMenu] = useState(2);
    const visible = useSelector(select => select.popup.visibleAddDemensions);
    const dispatch = useDispatch();
    const close = () => dispatch(visibleAddDemensions());

    useEffect(() => {
        if (!visible) return;
        setMenu(2);
        setInput({});
        setName('');
    }, [visible]);

    return (
        <Popup visible={visible} title='Добавить' padding='35px' marginBottom='20px' zIndex={3} adaptive={style.adaptive} close={close}>
            <NameWindows name={name} setName={setName}/>
            <Menu input={input} setInput={setInput} menu={menu} setMenu={setMenu}/>
            <SaveButton input={input} setInput={setInput} setMenu={setMenu} name={name} setName={setName} close={close}/>
        </Popup>
    );
}
export default AddDemensions