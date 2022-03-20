import postEdit from "../request/postEdit";

const save = (alert, name, margin, discount, setNameAnxiety, setMarginAnxiety, setDiscountAnxiety, array, dispatch, setArray, id, validator, close, clearAnxiety) => {
    if (validator( alert, name, margin, discount, setNameAnxiety, setMarginAnxiety, setDiscountAnxiety )) {
        const copy = JSON.parse(
            JSON.stringify(array)
        );
        const result = copy.map(e => {
            if (e.id === id) {
                e.two = name;
                e.card.margin = margin;
                e.card.discount = discount;
            }
            return e;
        });
        dispatch(
            setArray(result)
        );
        clearAnxiety([setNameAnxiety, setMarginAnxiety, setDiscountAnxiety]);
        close();
        postEdit(name, margin, discount, id);
    }
}

export default save;