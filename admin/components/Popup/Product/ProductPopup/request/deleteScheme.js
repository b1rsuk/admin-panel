import axios from "axios";

const deleteScheme = (src, product, setProduct) => {
    axios.post(process.env.deleteScheme, {src: src});
    const copyProduct = JSON.parse(JSON.stringify(product));
    copyProduct.scheme = copyProduct.scheme.filter(s => s != src);
    setProduct(copyProduct);
}

export default deleteScheme; 