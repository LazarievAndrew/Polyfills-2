// Необходимо реализовать полифилы для следующих методов:
// Array.pop

export default function pop(){
    if (this.length) {
        this.length = this.length - 1;
    }
    return this;
}


