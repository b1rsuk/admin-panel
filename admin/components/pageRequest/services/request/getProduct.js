import axios from "axios";

const getProduct = async(dispatch, setArray, id) => {
    const response = await axios.get(process.env.product + id);
    dispatch(setArray(response.data));
}
export default getProduct;