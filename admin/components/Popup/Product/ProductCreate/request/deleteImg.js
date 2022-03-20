import axios from "axios";

const deleteImg = src => axios.post(process.env.deleteImageProduct, {src: src});

export default deleteImg; 