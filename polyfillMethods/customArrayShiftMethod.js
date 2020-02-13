// Необходимо реализовать полифилы для следующих методов:
// Array.shift

export default function shift() {
    if(this.length) {
        for (let i = 1; i < this.length; i++) {
            this[i - 1] = this[i];
        }
        this.length = this.length - 1;
    }
};


