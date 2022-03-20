import axios from 'axios';

const postImg = async(img, name, array, dispatch, setArray, id, setProduct) => {
    const response = await axios.post(process.env.saveImage,{
        img: img,
        name: name, 
    });
    const copy = JSON.parse(JSON.stringify(array));
    copy.forEach((e, index) => {
        if (e.id == id) {
            copy[index].src.push(response.data);
            setProduct(copy[index]);
        }
    });
    dispatch(setArray(copy));
}

export default postImg;