// Необходимо реализовать полифилы для следующих методов:
// Array.map

export default function map(handler) {
    const mapArr = [];
    for (let i = 0; i < this.length; i++) {
        mapArr.push(handler(this[i]));
    };
    return mapArr;
};
