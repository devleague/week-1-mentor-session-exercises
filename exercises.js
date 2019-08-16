/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */
function firstReverse(str){
    if (typeof str !== 'string') {
        return null;
    } else {
        return str.split('').reverse().join('');
    }
};
/** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */
function alphaOrder(str) {
    if (typeof str !== 'string') {
        return null;        
    } else {
        return str.split('').sort().join('')
    }
};

 /** Function: vowelCount
 * The function will take the num parameter being passed in and
 * return the number of vowels in the string
 * @param {string} num
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */
var vowelCount = function(str) {
    var vowels = 'aAeEiIoOuU';
    var result = 0;
    if (typeof str === 'string') {
        for (var i = 0; i < str.length; i++) {
            if (vowels.indexOf(str[i])!== -1) {
                result += 1;
            }
        }
        return result;
            } else {
                return null;
            }
            
        };
            
        
 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} num
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */
var timeConvert = function(str) {
    var hrs = Math.floor(str/60);
    var mins = str % 60;
    if (typeof str === 'number'){
        return hrs + ':' + mins;
    }else{
        return null;
    }
}
 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */
var repeatString = function(str,num) {
    if (num > 0) {
        return str.repeat(num);
    } else {
        return null;
    }
};

/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
    firstReverse: firstReverse,
    alphaOrder: alphaOrder,
    vowelCount: vowelCount,
    timeConvert: timeConvert,
    repeatString: repeatString
}
