import axios from 'axios';

const getMenu = async(setMenu) => {
    const result = await axios.get(process.env.menu);
    setMenu(result.data);
}

export default getMenu;