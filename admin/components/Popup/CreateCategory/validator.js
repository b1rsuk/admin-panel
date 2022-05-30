const validator = (margin, title, discount, setMarginAnxiety, setDiscountAnxiety, setTitleAnxiety) => {
    if (title.trim() == '') return setTitleAnxiety(true);
    if (!Number(margin) && margin !== '0') return setMarginAnxiety(true);
    if (!Number(discount) && discount !== '0') return setDiscountAnxiety(true);
    return true;
}
export default validator;