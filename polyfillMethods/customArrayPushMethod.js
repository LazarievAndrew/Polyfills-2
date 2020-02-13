// Необходимо реализовать полифилы для следующих методов:
// Array.push

export default function push(push) {
    return this[this.length] = push;
}
