// Необходимо реализовать полифилы для следующих методов:
// Array.some

export default function some(handler) {
    for (let item of this) {
        if (handler(item)){
            return true;
        }
    }
    return false;
};
