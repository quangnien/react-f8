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

/* B1: normal function */
function logger(log){
    console.log(log)
}

logger('Message ...');

/* B2: expression function */
const logger2 = function logger(log){
    console.log(log)
}

logger2('Message ...');

/* B3: arrow function */
const logger3 = (log) => {
    console.log(log)
}

logger3('Message ...');

/* B4: vd more about B3 */

// basic style : 
const sum = (a,b) => {
    return a + b;
}

// convert to arrow function : 
const sum2 = (a,b) => a + b;
console.log(sum(2,2));

/* B5: vd more about B3 */

// basic style : 
const sum3 = (a,b) => {
    return {
        a:a,
        b:b
    }
}

// convert to arrow function : 
const sum4 = (a,b) => ({a:a, b:b});
console.log(sum4(2,2));

/* B6: vd more*/
const course = {
    name: 'Javascript basic!',
    getName: () => {
         return this; // context
    }
};

console. log(course.getName ());

/* B7: limited of arrow function : that is it can't define contructor. */

// function normal -> ok
const Course = function(name, price){
    this.name = name;
    this.price = price;
}
const jsCourse = new Course('Javascript', 1);

// arrow fucntion -> fail
const Course2 = (name, price) => {
    this.name = name;
    this.price = price;
}
const jsCourse2 = new Course('Javascript', 1);


