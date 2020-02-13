// Необходимо реализовать полифилы для следующих методов:
// Object.freeze

export default function freeze(obj) {
    for(let prop in obj){
        if (obj.hasOwnProperty(prop)) {
            Object.defineProperty(obj, prop, {configurable: false, writable: false})
        }
    }
}
