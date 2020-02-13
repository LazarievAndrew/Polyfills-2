// Необходимо реализовать полифилы для следующих методов:
// Array.forEach

export default function forEach(handler) {
    for (let i = 0; i < this.length; i++) {
        this[i] = handler(this[i]);
    }
};
