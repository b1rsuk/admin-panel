import deleteImg from "../../../request/deleteImg";

const deleteImage = (product, arrow, setArrow, setProduct) => {
    const copy = JSON.parse(JSON.stringify(product));
    deleteImg(copy.src[arrow]);
    copy.src.splice(arrow, 1);
    setArrow(0);
    setProduct(copy);
}

export default deleteImage;