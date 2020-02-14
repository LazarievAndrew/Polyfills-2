// Необходимо реализовать полифилы для следующих методов:
// Object.create

export default function create(obj) {
    function F(){}
    F.prototype = obj;
    return  new F();
}
