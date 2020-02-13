// Необходимо реализовать полифилы для следующих методов:
// Array.join

export default function join(separator = '', quantity = this.length) {
    let str = '';
    for(let i = 0; i < quantity; i++){
        if (i === quantity - 1){
            str += this[i].toString();
        } else {
            str += (this[i].toString() + separator);
        }
    }
    return str;
};
