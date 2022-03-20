import push from '../push/push';

const click = (number, setNumbers, limit, numbers, namePage, router) => {
    push(router, namePage, number);        
    if (numbers.length < 4) return;
    const arr = [];
    for (let i = 0; i < 4; i++) {
        if (number + i > limit) break;
        arr.push(number + i);
    }
    setNumbers(arr);
}

export default click;