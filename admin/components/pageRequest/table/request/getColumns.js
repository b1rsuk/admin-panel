import axios from 'axios';

const getColumns = async(page, id, dispatch, setArray) => {
    const request = await axios.get(process.env.columns + `${page}/${id}`);
    dispatch(setArray(request.data));
}

export default getColumns;