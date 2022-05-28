import style from './inputs.module.css';
import Input from '../../../../Input/Input';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Inputs = ({index, input, setInput}) => {
    const [name, setName] = useState('');
    const visible = useSelector(select => select.popup.visibleAddMaterial);

    useEffect(() => {
        input[index] = {name: name};
    }, [name]);

    useEffect(() => {
        if (!visible) return;
        setName('');
    }, [visible]);

    return (
        <div className={style.container}>
            <div className={style.title}>
                <Input 
                    type='text' 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    styles={{
                        border: '2px solid var(--gray)',
                        borderRadius: '7px',
                        height: '40px',
                        marginBottom: '16px'
                    }}
                    font={{
                        fontWeight: 500,
                        fontSize: '18px',
                        padding: '8px'
                    }}
                    anxiety={true}
                    placeholder='Title'
                />
            </div>
    </div>
    );
}
export default Inputs;