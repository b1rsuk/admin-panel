import axios from "axios";

const delMaterial = async index => axios.get(process.env.delMaterial + index);

export default delMaterial;