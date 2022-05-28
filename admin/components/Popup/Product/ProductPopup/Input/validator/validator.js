import postEdit from '../../request/postEditi';
import translit from '../../../translit';

const validator = (name, price, about, detalis, category, discount, setNameAnxiety, setDiscountAnxiety, setPriceAnxiety, setAboutAnxiety, close, alert, array, id, dispatch, setArray, product) => {
    if (name.trim() == '') {
        setNameAnxiety(true);
        alert.error('Имя не может быть пустым');
        return;
    }
    if (!Number(price) && price !== 0) {
        setPriceAnxiety(true);
        alert.error('Цена должна содержать только цифры');
        return;
    }
    if (!Number(discount) && discount !== 0) {
        setDiscountAnxiety(true);
        alert.error('Старая цена должна содержать только цифры');
        return;
    }
    if (about.trim() == '') {
        setAboutAnxiety(true); 
        alert.error('Описание не может быть пустым');
        return;
    }
    close();
    const copy = JSON.parse(
        JSON.stringify(array)
    );
    const label = translit(name);
    const result = copy.map(e => {
        if (e.id == id) {
            e.name = name;
            e.price = [price, discount];
            e.about = about;
            e.detalis = detalis;
            e.category = category;
            e.label = label;
        }
        return e;
    });
    postEdit(name, price, about, detalis, category, product.src, label, id);
    dispatch(setArray(result));
}
export default validator;