import axios from "axios"

const postDeleteCategory = (id, category) => axios.post(process.env.dellCategory, {
    id: id,
    category: category
});
export default postDeleteCategory;