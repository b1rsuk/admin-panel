import axios from "axios";

const postCreate = (name, price, about, detalis, category, src, demensions, material, id, label) => axios.post(process.env.createProduct, {
    name: name,
    price: price,
    about: about,
    detalis: detalis,
    category: category,
    src: src,
    demensions: demensions,
    material: material,
    id: id,
    label: label
});

export default postCreate; 