const right = (setNumbers, numbers, limit) => {
    if (numbers.length < 4) return;
    const result = [];
    for (let i = 0; i < 4; i++) {
        if (numbers[numbers.length - 1] + i > limit) result.unshift(numbers[numbers.length - 1] - i);
        else result.push(numbers[numbers.length - 1] + i);
    } 
    setNumbers(result);
}

export default right;