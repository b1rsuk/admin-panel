import axios from "axios";

const getCategory = async (setTable, dispatch) => {
    const item = await axios.get(process.env.categoryTable);
    dispatch(setTable(item.data));
}

export default getCategory;