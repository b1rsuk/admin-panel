import Form from './Form/Form';
import LiteText from '../../../LiteText/LiteText';
import { Fragment } from 'react';

const InputUser = ({ form, form2 }) => {
    return (
        <Fragment>
            <Form form={form}/>
            <LiteText>Сумма, отображаемая в личном кабинете пользователя</LiteText>
            <Form form={form2}/>
        </Fragment>
    );
}

export default InputUser;