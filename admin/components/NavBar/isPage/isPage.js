const isPage = (dispatch, setArray, isPage, page) => {
    if (isPage == page) return;
    dispatch(setArray([]));
}
export default isPage;