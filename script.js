
import create from "./polyfillMethods/objectCreateMethod.js";
import keys from "./polyfillMethods/objectKeysMethod.js";
import pop from "./polyfillMethods/customArrayPopMethod.js";
import push from "./polyfillMethods/customArrayPushMethod.js";
import shift from "./polyfillMethods/customArrayShiftMethod.js";
import unshift from "./polyfillMethods/customArrayUnshiftMethod.js";
import map from "./polyfillMethods/customMapMethod.js";
import forEach from "./polyfillMethods/customForEachMethod.js";
import filter from "./polyfillMethods/customFilterMethod.js";
import arrayReverse from "./polyfillMethods/customArrayReversMethod.js";
import join from "./polyfillMethods/customJoinMethod.js";
import reduce from "./polyfillMethods/customReduceMethod.js";
import sort from "./polyfillMethods/customSortMethod.js";
import freeze from "./polyfillMethods/objectFreezeMethod.js";
import some from "./polyfillMethods/customSomeMethod.js";
import every from "./polyfillMethods/customEveryMethod.js";

Object.prototype.customCreate = create;
Object.prototype.customKeys = keys;
Array.prototype.customPop = pop;
Array.prototype.customPush = push;
Array.prototype.customShift = shift;
Array.prototype.customUnshift = unshift;
Array.prototype.customMap = map;
Array.prototype.customForEach = forEach;
Array.prototype.customFilter = filter;
Array.prototype.customArrayRevers = arrayReverse;
Array.prototype.customJoin = join;
Array.prototype.customReduce = reduce;
Array.prototype.customSort = sort;
Object.prototype.customFreeze = freeze;
Array.prototype.customSome = some;
Array.prototype.customEvery = every;



// custom create
console.log('----custom create----');

const man = {
    'head': true,
    'hand': 2,
    'leg': 2,
};

const newMan = Object.customCreate(man);

console.log('---objectCreatePolyfill---');
console.log(newMan);


// custom keys
console.log('----custom keys----');

const beers = {
    'first': 'slavutich',
    'second': 'jiguli',
    'third': 'obolon',
};
console.log(beers);
console.log(Object.customKeys(beers));

// custom pop
const popFruits = ['apple', 'cherry', 'banana'];
console.log('---custom pop----');
console.log(popFruits);
popFruits.customPop();
console.log(popFruits);
popFruits.customPop();
console.log(popFruits);
popFruits.customPop();
console.log(popFruits);
popFruits.customPop();
console.log(popFruits);


// custom push
console.log('----custom push----');
const pushFruits = ['apple', 'cherry', 'banana'];
console.log(pushFruits);
pushFruits.customPush('kiwi');
console.log(pushFruits);
pushFruits.customPush('orange');
console.log(pushFruits);


// custom shift
console.log('----custom shift----');
const shiftFruits = ['apple', 'cherry', 'banana'];
console.log(shiftFruits);
shiftFruits.customShift();
console.log(shiftFruits);
shiftFruits.customShift();
console.log(shiftFruits);
shiftFruits.customShift();
console.log(shiftFruits);
shiftFruits.customShift();
console.log(shiftFruits);


// custom unshift
console.log('----custom unshift----');
const unshiftFruits = ['apple', 'cherry', 'banana'];
unshiftFruits.customUnshift('orange');
console.log(unshiftFruits);
unshiftFruits.customUnshift('kiwi');
console.log(unshiftFruits);


// custom Map
console.log('----custom Map----');

// обработчик
function nameLength(name) {
    return name.length;
}

const mapFruits = ['apple', 'cherry', 'kiwi', 'banana'];
console.log(mapFruits);
console.log(mapFruits.customMap(nameLength));

// custom forEach
console.log('----custom forEach----');

// обработчик
function nameLengthPlus(name) {
    return 'in \'' + name + '\' ' + name.length + ' letters';
}

const forEachFruits = ['apple', 'cherry', 'banana'];
forEachFruits.customForEach(nameLengthPlus);
console.log(forEachFruits);


// custom filter
console.log('----custom filter----');

// обработчик
function positive(number) {
    if (number > 0) return true;
}

const arrForFilter = [2, -4, 5, -3, -7, -8, 9, 78];
console.log(arrForFilter.customFilter(positive));


// custom arrayRevers
console.log('----custom arrayRevers----');

const reverseFruits = ['apple', 'cherry', 'banana'];
reverseFruits.customArrayRevers();
console.log(reverseFruits);


// custom join
console.log('----custom join----');
const joinFruits = ['apple', 'cherry', 'banana', 'orange', 'kiwi'];
console.log(joinFruits);
let joinedFruits = joinFruits.customJoin(', ', 4);
console.log(joinedFruits);


// custom reduce
console.log('----custom reduce----');

// обработчик

function multiplicator(acc, element) {
    return acc * element;
}

let reduceArr = [2, 6, 7, 3, 9];
console.log(reduceArr);
let reduced = reduceArr.customReduce(multiplicator,1 );
console.log(reduced);


// custom sort
console.log('----custom sort----');

// обработчик

const  sortArr = [9, 6, 12, 2, 8];
console.log(sortArr);
sortArr.customSort();
console.log(sortArr);
sortArr.customSort((a,b) => a - b);
console.log(sortArr);
sortArr.customSort((a,b) => b - a);
console.log(sortArr);


// custom freeze
console.log('----custom freeze----');

const freezeMan = {
    'head': true,
    'hand': 2,
    'leg': 2,
};

Object.customFreeze(freezeMan);

// freezeMan.head = false;
// freezeMan.hand = 3;
// freezeMan.leg = 'four';

console.log(freezeMan);


// custom some
console.log('----custom some----');

// обработчик
function isPositive(item) {
    return item > 0;
}

const someArray1 = [-3, 0, -8, -79, -1, 9, -8];
const someArray2 = [-3, 0, -8, -79];
console.log(someArray1);
console.log(someArray2);

console.log(someArray1.customSome(isPositive));
console.log(someArray2.customSome(isPositive));


// custom every
console.log('----custom every----');

// обработчик
function negative(element) {
    return element < 0;
}

const everyArray1 = [-3, 0, -8, -79, -1, 9, -8];
const everyArray2 = [-3, -8, -8, -79];
console.log(everyArray1);
console.log(everyArray2);

console.log(everyArray1.customEvery(negative));
console.log(everyArray2.customEvery(negative));
