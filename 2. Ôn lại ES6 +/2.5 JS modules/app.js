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
// 12. Modules : have to contain : Import / Export

// Khi import như này -> phải hiểu là 
// cái mà chúng ta import là cái mà module nó export default
import logger from "./logger.js";

// Khi import như này -> phải hiểu là 
// cái mà chúng ta import KHÔNG PHẢI là cái mà module nó export default
// mà chỉ là export const thôi
import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from './constant.js';

// Khi import như này -> phải hiểu là 
// import all những cái nhỏ nhắn xinh xắn const
import * as constants from "./constant.js";

logger('Test message...', TYPE_LOG)
logger('Test message...', TYPE_WARN)
logger('Test message...', TYPE_ERROR)

console.log(constants)