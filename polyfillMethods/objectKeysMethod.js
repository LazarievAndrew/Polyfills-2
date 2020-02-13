// Необходимо реализовать полифилы для следующих методов:
// Object.keys

export default function keys(obj) {
    const keys = [];
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            keys.push(key);
        }
    }
    return keys;
}
