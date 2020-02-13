// Необходимо реализовать полифилы для следующих методов:
// Array.every

export default function every(handler) {
    for (let item of this) {
        if (!handler(item)){
            return false;
        }
    }
    return true;
};
