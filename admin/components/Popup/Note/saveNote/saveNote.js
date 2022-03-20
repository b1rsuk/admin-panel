const saveNote = (textArea, id, array, dispatch, setArray) => {
    const copy = JSON.parse(
        JSON.stringify(array)
    );
    const arr = copy.map(e => {
        if (e.user.id == id) e.user.note = textArea; 
        return e;
    });
    dispatch(setArray(arr));
}

export default saveNote;