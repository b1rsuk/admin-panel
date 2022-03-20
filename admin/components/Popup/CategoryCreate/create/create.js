import postCreate from "../request/postCreate";

const save = (alert, name, margin, discount, setNameAnxiety, setMarginAnxiety, setDiscountAnxiety, array, dispatch, setArray, validator, close, clearAnxiety) => {
    if (validator( alert, name, margin, discount, setNameAnxiety, setMarginAnxiety, setDiscountAnxiety )) {
        const copy = JSON.parse(
            JSON.stringify(array)
        );
        const lastId = () => {
            if (copy.length == 0) return 0;
            return copy[copy.length-1].id + 1;
        }

        copy.push(
            {
                id: lastId(),
                one: lastId(),
                two: name,
                three: 0,
                card: {
                    margin: margin,
                    discount: discount
                }
            }
        )
        dispatch(
            setArray(copy)
        );
        clearAnxiety([setNameAnxiety, setMarginAnxiety, setDiscountAnxiety]);
        close();
        postCreate(name, margin, discount);
    }
}

export default save;