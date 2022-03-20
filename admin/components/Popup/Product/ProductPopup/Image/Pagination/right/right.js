const right = (arrow, setArrow, limit) => {
    if (arrow >= limit) return;
    setArrow(arrow + 1);
}
export default right;
