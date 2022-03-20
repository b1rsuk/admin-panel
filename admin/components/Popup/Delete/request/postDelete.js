import axios from "axios";

const postDelete = (page, id) => axios.post(process.env.delete, {
    page: page,
    id: id
});

export default postDelete;