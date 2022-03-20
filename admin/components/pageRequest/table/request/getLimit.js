import axios from "axios"

const getLimit = async (page, setLimitPage) => {
    const req = await axios.get(process.env.limitTable + page);
    setLimitPage(req.data);
}

export default getLimit;