import axios from 'axios';

const postImg = async(img, name, product, setProduct) => {
    const response = await axios.post(process.env.saveImage,{
        img: img,
        name: name, 
    });

    const copy = JSON.parse(
        JSON.stringify(product)
    );
    copy.src.push(response.data);
    setProduct(copy); 
}

export default postImg;