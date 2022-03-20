const saveUser = (login, password, sum, fullName, birchDay, status, dispatch, setArray, array, id, close) => {
    const copy = JSON.parse(
        JSON.stringify(array)
    );
    const result = copy.map(e => {
        if (e.one == id) {
            e.two = login;
            e.user.password = password;
            e.three = sum;
            e.user.fullName = fullName;
            e.user.birchDay = birchDay;
            e.four = status;
        } 
        return e;
    });
    dispatch(setArray(result));
    close();
}

export default saveUser;