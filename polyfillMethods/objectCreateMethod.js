// Необходимо реализовать полифилы для следующих методов:
// Object.create

export default function create(obj) {
    const newobj = {};
    newobj.__proto__ = obj;
    return  newobj;
}
