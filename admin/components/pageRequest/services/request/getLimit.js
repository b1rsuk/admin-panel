import axios from "axios"

const getLimit = async setLimitPage => {
    const req = await axios.get(process.env.limitServices);
    setLimitPage(req.data);
}

export default getLimit;