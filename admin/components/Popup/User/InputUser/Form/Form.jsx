import { Fragment } from 'react';
import Input from '../../../../Input/Input';
import style from './form.module.css';

const Form = ({ form }) => {
    return (
        form.map((form, index) => (
            <div className={style.input} key={index}>
                <h3>{form.name}</h3>
                <Input 
                    type='text' 
                    value={form.value} 
                    onChange={e => form.setValue(e.target.value)}
                    styles={{
                        border: '2px solid var(--gray)',
                        borderRadius: '14px',
                        height: '52px',
                        marginBottom: '16px'
                    }}
                    font={{
                        fontWeight: 500,
                        fontSize: '18px',
                        padding: '8px'
                    }}
                    rigthSvg={form.anxiety}
                    anxiety={true}
                />
            </div>                    
        ))
    );
}

export default Form;