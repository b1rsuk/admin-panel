import axios from "axios";

const postEdit = (name, price, about, detalis, category, src, label, id) => axios.post(process.env.editProduct, {
    name: name,
    price: price,
    about: about,
    detalis: detalis,
    category: category,
    src: src,
    label: label,
    id: id
});

export default postEdit; 