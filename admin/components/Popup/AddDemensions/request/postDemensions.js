import axios from 'axios';

const postDemensions = async value => axios.post(process.env.demensions, {
    value: value
});

export default postDemensions;