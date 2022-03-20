import axios from 'axios';

const postNote = (note, id) => axios.post(process.env.note, {
    note: note,
    id: id
});

export default postNote;