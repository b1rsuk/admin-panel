import axios from "axios";

const postCreate = (name, price, about, detalis, category, src, id) => axios.post(process.env.createProduct, {
    name: name,
    price: price,
    about: about,
    detalis: detalis,
    category: category,
    src: src,
    id: id
});

export default postCreate; 