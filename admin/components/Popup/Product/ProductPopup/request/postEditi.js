import axios from "axios";

const postEdit = (name, price, about, detalis, category, src, id) => axios.post(process.env.editProduct, {
    name: name,
    price: price,
    about: about,
    detalis: detalis,
    category: category,
    src: src,
    id: id
});

export default postEdit; 