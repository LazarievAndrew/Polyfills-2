// Необходимо реализовать полифилы для следующих методов:
// Array.reverse

export default function arrayReverse() {
    const newArr = [];
    for (let i = this.length - 1; i >= 0; i--){
        newArr.push(this[i]);
    }
    for (let i = 0; i < newArr.length; i++){
        this[i] = newArr[i];
    }
}
