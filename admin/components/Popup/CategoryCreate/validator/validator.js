const validator = ( alert, name, margin, discount, setNameAnxiety, setMarginAnxiety, setDiscountAnxiety ) => {
    if (name.trim() == '') {
        alert.error('Название не иможет быть пустым');
        setNameAnxiety(true);
        return;
    }
    if (!Number(margin) && margin !== '0') {
        alert.error('Общая наценка может принимать только цифры');
        setMarginAnxiety(true);
        return;
    }
    if (!Number(discount) && discount !== '0') {
        alert.error('Общая скидка может принимать только цифры');
        setDiscountAnxiety(true);
        return;
    }
    return true;
}

export default validator;