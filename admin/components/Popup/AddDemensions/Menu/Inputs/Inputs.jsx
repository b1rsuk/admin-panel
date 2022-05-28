import style from './inputs.module.css';
import Input from '../../../../Input/Input';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Inputs = ({index, input, setInput}) => {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const visible = useSelector(select => select.popup.visibleAddDemensions);

    useEffect(() => {
        input[index] = {name: name, value: value};
    }, [name, value]);

    useEffect(() => {
        if (!visible) return;
        setName('');
        setValue('');
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
            <div className={style.value}>
                <Input 
                    type='text' 
                    value={value} 
                    onChange={e => setValue(e.target.value)}
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
                    placeholder='Значение'
                />
            </div>
    </div>
    );
}
export default Inputs;