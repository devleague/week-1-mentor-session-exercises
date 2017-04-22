/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */

 function firstReverse(str){
 	//Step 1: if parameter is not equal to string return null
 	if(typeof str !== 'string'){
 		return null;
 	}

 	//Step 2: use the split() method to return a new array
 	var splitString = str.split('');
 	//Step 3: use reverse method
 	var reverseArray = splitString.reverse();
 	//Step 4: use the join method
 	var joinArray = reverseArray.join('');
 	//Return
 	return joinArray;
 }

firstReverse('Aloha');
 //console.log(firstReverse('Aloha'));

 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */

function alphaOrder(str){
	//Step 1: use split() method to return new array
	var splitString = str.split('');
	//Step 2: use sort() method
	var sortArray = splitString.sort();
	//Step 3: convert back to string
	joinArray = splitString.join('');
	//return
	return joinArray;
}
alphaOrder('alphabetical');
//console.log(alphaOrder('alphabetical'));

 /** Function: vowelCount
 * The function will take the str parameter being passed in and
 * return the number of vowels in the string
 * @param {string} str
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */

 function vowelCount(str){
 	//Step 1: set variables for list and count
 	var vowels = 'aeiouAEIOU';
 	var count = 0;
 	//Step 2: set for loop
 	for(var i = 0; i < str.length; i++){
 		if(vowels.indexOf(str[i]) !== -1)
 		{
 			count += 1;
 		}
 	}
 	return count;
 }
console.log(vowelCount('everything but the kitchen sink'));


 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} str
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */

 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */


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
    timeConvert: null,
    repeatString: null
};
