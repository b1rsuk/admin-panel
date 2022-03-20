const right = (setNumbers, numbers, limit) => {
    if (numbers[0] +4 > limit) return; 
    setNumbers([
        numbers[0] +1,
        numbers[0] +2,
        numbers[0] +3,
        numbers[0] +4,
    ]);
}

export default right;