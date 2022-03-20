import deleteImg from "../../../request/deleteImg";

const deleteImage = (product, arrow, setArrow, setProduct, dispatch, setArray, array) => {
    const copy = JSON.parse(JSON.stringify(product));
    const copyArray = JSON.parse(JSON.stringify(array)); 
    if (copy.src.length == 1) return;
    deleteImg(copy.src[arrow]);
    copy.src.splice(arrow, 1);
    setArrow(0);
    setProduct(copy);
    copyArray.forEach((array, index) => {
        if (array.id == copy.id) {
            copyArray[index] = copy;
            dispatch(setArray(copyArray));
        }
    });
}

export default deleteImage;