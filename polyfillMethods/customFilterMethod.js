// Необходимо реализовать полифилы для следующих методов:
// Array.filter

export default function filter(handler) {
    const newArr = [];
    for (let i = 0; i < this.length; i++){
        if (handler(this[i])) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}
