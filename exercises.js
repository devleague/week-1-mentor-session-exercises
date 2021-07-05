/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
*/

function firstReverse(str){
	if (typeof str != "string"){return null;}
	var strArray = str.split("");
	var lp = Math.floor(strArray.length/2);
	for (i=0; i<lp; i++){
		var len = strArray.length-1;
		var first = strArray[i];
		var last = strArray[len-i];
		strArray[i] = last;
		strArray[len-i] = first;
	}
	str = strArray.join('');
	return str;
}


 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */

 function alphaOrder(str){
	if (typeof str != "string"){return null;}
 	var strArr = str.split("");
 	for (i=0; i < strArr.length-1; i++){
 		if (strArr[i]>strArr[i+1]){
 			var lesser = strArr[i+1];
 			var greater = strArr[i];
 			strArr[i] = lesser;
 			strArr[i+1]= greater; 
 		}
 	}
 	return strArr.join('');
 }

 /** Function: vowelCount
 * The function will take the num parameter being passed in and
 * return the number of vowels in the string
 * @param {string} num
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */

function vowelCount(str){
	if (typeof str != "string"){return null;}
	var count = 0;
	for(i=0; i<str.length; i++){
		var x = str.charAt(i);
		if (x=="a" || x=="e" || x=="i" || x=="o" || x=="u"){
			count += 1;
		}
	}
	return count;
}


 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} num
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */

function timeConvert(str){
	if (typeof str != "number"){return null;}
	var minutes = Number(str);
	var hours = Math.floor(minutes/60);
	var remainingMins = minutes - (hours*60);
	return hours + ":" + remainingMins;
}

 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */

function repeatString(str, num){
		if (typeof str != "string"){return null;}
		if (typeof num != "number"){return null;}
		if (num < 0){return ""};
		var newStr = "";
		for(i=0; i<num;i++){
			newStr += str;
		}
		return newStr;
}

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
