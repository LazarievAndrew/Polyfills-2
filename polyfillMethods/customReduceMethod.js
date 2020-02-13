// Необходимо реализовать полифилы для следующих методов:
// Array.reduce

export default function reduce(handler, initialValue = undefined) {
    let result = initialValue;
    for (let i = 0; i < this.length; i++){
        result = handler(result, this[i]);
    }
    return result;
};
