import postCreate from '../../request/postCreate';
import translit from '../../../translit';

const validator = (name, price, discount, about, detalis, category, createProduct, setNameAnxiety, setDiscountAnxiety, setPriceAnxiety, setAboutAnxiety, close, alert, product, dispatch, setArray, array) => {
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
    if (about.trim() == '') {
        setAboutAnxiety(true);
        alert.error('Описание не может быть пустым');
        return;
    }
    if (!Number(discount) && discount !== 0) {
        setDiscountAnxiety(true);
        alert.error('Старая цена должна содержать только цифры');
        return;
    }
    if (product.src.length == 0) {
        alert.error('Загрузите картинку');
        return;
    }
    close();
    
    const copy = JSON.parse(
        JSON.stringify(product)
    );
    const copyArray = JSON.parse(
        JSON.stringify(array)
    );
    const lastId = () => {
        if (array.length == 0) return 0;
        return array[array.length-1].id + 1;
    }
    copy.name = name;
    copy.price = [price, discount];
    copy.about = about;
    copy.detalis = detalis;
    copy.category = category;
    copy.demensions = createProduct[0].demensions;
    copy.material = createProduct[0].material;
    copy.id = lastId();
    const label = translit(name);
    copyArray.push(copy);
    dispatch(setArray(copyArray));
    postCreate(name, [price, discount], about, detalis, category, copy.src, copy.demensions, copy.material, copy.id, label);
}
export default validator; 