import axios from "axios";

const postEdit = (name, margin, discount, id) => axios.post(process.env.categoryEdit, {
    name: name,
    margin: margin,
    discount: discount,
    id: id
});

export default postEdit;