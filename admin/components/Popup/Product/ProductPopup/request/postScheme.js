import axios from 'axios';

const postImg = async(img, name, array, dispatch, setArray, id, setProduct) => {
    const response = await axios.post(process.env.saveScheme,{
        img: img,
        name: name, 
    });
    const copy = JSON.parse(JSON.stringify(array));
    copy.forEach((e, index) => {
        if (e.id == id) {
            copy[index].scheme.push(response.data);
            setProduct(copy[index]);
        }
    });
    dispatch(setArray(copy));
}

export default postImg;