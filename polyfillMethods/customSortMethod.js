// Необходимо реализовать полифилы для следующих методов:
// Array.sort

export default function sort(handler) {
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - 1; j++) {
            let a = this[j];
            let b = this[j + 1];
            if(handler === undefined) {
                if ((this[j].toString() > this[j + 1].toString())) {
                    this[j] = b;
                    this[j + 1] = a;
                }
            } else if (handler(this[j], this[j + 1]) > 0) {
                this[j] = b;
                this[j + 1] = a;
            }
        }
    }
    return this;
}
