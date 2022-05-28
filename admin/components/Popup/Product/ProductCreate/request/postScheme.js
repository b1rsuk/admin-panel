import axios from 'axios';

const postScheme = async(img, name, product, setProduct) => {
    const response = await axios.post(process.env.saveScheme,{
        img: img,
        name: name, 
    });
    const copy = JSON.parse(JSON.stringify(product));
    copy.scheme.push(response.data);
    setProduct(copy);
}

export default postScheme;