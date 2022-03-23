const left = (setNumbers, numbers) => {
    const result = [];
    for (let i = 4; i > 0; i--) {
        if (numbers[numbers.length -1] - i < 0) continue;
        result.push(numbers[numbers.length -1] - i);
    }
    if (numbers.length > result.length) return;
    setNumbers(result);
}

export default left;