import axios from "axios";

const postImg = async(img, name, array, dispatch, setArray, id, setProduct) => {
    const response = await axios.post(process.env.saveImageCreate,{
        img: img,
        name: name, 
    });
    const copy = JSON.parse(JSON.stringify(array));
    alert('s')
    copy.forEach((e, index) => {
        if (e.id == id) {
            alert(copy[index].src)
            alert(response.data)
            setProduct(copy[index]);
        }
    });
    dispatch(setArray(copy));
}

export default postImg;