const left = (setNumbers, numbers) => {
    if (numbers[0] == 0) return; 
    const result = []; 
    for (let i = 0; i < 4; i++) {
        if (numbers[0] - i < 0) break;
        result.push(numbers[0] - i);
    }
    setNumbers(result.reverse());
}

export default left;