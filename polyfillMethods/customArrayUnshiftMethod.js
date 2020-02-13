// Необходимо реализовать полифилы для следующих методов:
// Array.unshift

export default function unshift(unshift) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = unshift;
}
