import axios from 'axios';

const postCreateCategory = (menu, category) => axios.post(process.env.createCategory, {
    menu: menu,
    category: category
});
export default postCreateCategory;