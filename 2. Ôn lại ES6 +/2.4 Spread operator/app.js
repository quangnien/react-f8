// 1. Let, const
// 2. Template Literals 
// 3. Multi-line String 
// 4. Arrow function 
// 5. Classes
// 6. Default parameter values
// 7. Destructuring
// 8. Rest parameters (...)
// 9. Spread (...)
// 10. Enhanced object literals
// 11. Tagged template literal
// 12. Modules

// toán tử trải

// bài toán : nối array1 + array2 thành array3 : 
var array1 = ['Javascript', 'Ruby', 'PHP'];
var array2 = ['ReactJS', 'Dart'];
var array3 = [...array1, ...array2];

console.log(array3);

// tương tự với object
var objecti = {
    name: 'Javascript'
}; 

var object2 = {
    price: 1000
};
    
var object3 = {
    ...object1,
    ...object2
};
    
console.log(object3);

// ex more with object
var defaultConfig = {
    api: 'https://domain-trang-khoa-hoc',
    apiVersion: 'v1',
    other: 'other',
    //
    //
};
    
var exerciseConfig = {
    ...defaultConfig,
    api: 'https://domain-trang-bai-tap',
};

console.log(exerciseConfig);

// truyền tham số cho hàm (sử dụng cả rest & spread)
var array = ['Javascript', 'PHP', 'Ruby'];

function logger(...rest) {
    for (var i = 0; i < rest.length; i++) {
        console. log(rest[i]);
    }
}
logger(...array)


// PHÂN BIỆT REST & SPREAD
// - REST : khi sử dụng kết hợp với DESTRUCTURING, sử dụng trong việc định nghĩa ra tham số
// - SPREAD : khi gọi đến hàm truyền tham số