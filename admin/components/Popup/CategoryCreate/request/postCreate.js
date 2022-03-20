import axios from "axios";

const postCreate = (name, margin, discount) => axios.post(process.env.createCategory, {
    name: name,
    margin: margin,
    discount: discount,
});

export default postCreate;