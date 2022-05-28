import axios from 'axios';

const postMaterial = async value => axios.post(process.env.material, {
    value: value
});

export default postMaterial;