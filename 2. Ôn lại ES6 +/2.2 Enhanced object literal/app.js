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

// 1. Định nghĩa key-value cho object 

var name = 'Javascript';
var price = 1000;

// basic style: 

var course = {
    name: name, 
    price: price
}

// advance :
var course2 = {
    name, 
    price
}

// 2. Định nghĩa method cho object 
var course3 = {
    name, 
    price,
    getName: function() {
        return this.name;
    }
}
// or
var course4 = {
    name, 
    price,
    getName() {
        return this.name;
    }
}

// 3. Định nghĩa key cho object dưới dạng biến
var fieldName = 'new-name';
var filedPrice = 'price';

const course = {
    [fieldName]: 'Javascript',
    [filedPrice]: 'Javascript'
}