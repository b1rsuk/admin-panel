import axios from "axios";

const delDemension = async index => axios.get(process.env.delDemension + index);

export default delDemension;