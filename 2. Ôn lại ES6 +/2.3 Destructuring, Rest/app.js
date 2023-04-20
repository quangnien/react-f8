// 1. Let, const
// 2. Template Literals 
// 3. Multi-line String 
// 4. Arrow function 
// 5. Classes
// 6. Default parameter values
// 7. Destructuring
// 8. Rest parameters
// 9. Spread
// 10. Enhanced object literals
// 11. Tagged template literal
// 12. Modules

// phân rã

/* _______________ Ex with array _______________ */

// basic style : 
var array = ['Javascript', 'PHP', 'Ruby'];

var a = array[0];
var b = array[1];
var c= array[2];

console. log(a, b, c);

// Rest style
var [a, b, c] = array;
var [a, , c] = array;

// -> Rest parameters : lấy thằng còn lại
var [a, ...rest] = array;

/* ___________________________________________ */

/* _______________ Ex with object _______________ */

// basic style : 
var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
}

var {name, price, image } = course;
    
console.log(name, price, image);

// Rest style : 
var {name, ...rest} = course;

console.log(name);
console.log(rest);

// ex: hãy xóa 1 key của object mà ko được dùng delete -> nhớ ngay đến thẳng rest này
console.log(rest);

// ex2: object lồng object
var course2 = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'ReactJS'
    }
}

var {name: parentName, children: {name: childrenName}} = course2;
console.log(parentName);
console.log(childrenName);

// ex3: set default for value that undefine
var {name, description = 'default description value'} = course2;
console.log(description);

/* ___________________________________________ */


/* _______________ Ex more _______________ */
function logger(...params) {
    console.log(params);
}

function logger2(a, b, ...params) {
    console.log(params);
}

logger(1,2,3,4,5,6,7,9);
logger2(1,2,3,4,5,6,7,9);
/* ___________________________________________ */

/* _______________ Ex more _______________ */
function logger3(name, price, ...rest) {
    console.log(name);
    console.log(price);
    console.log(rest);
}

function logger4(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

logger4([2, 6, 12, 23, 53]);
/* ___________________________________________ */