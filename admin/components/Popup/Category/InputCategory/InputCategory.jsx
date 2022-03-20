import Input from '../../../Input/Input';
import { useState } from 'react';

const InputCategory = ({ category }) => {
    return (
        <Input 
            type='text' 
            styles={{
                border: '2px solid var(--gray)',
                borderRadius: '14px',
                height: '52px',
                marginBottom: '15px'
            }}
            font={{
                fontWeight: 500,
                fontSize: '18px'
            }}
            readOnly={true}
            value={category} 
        />
    );
}
export default InputCategory;