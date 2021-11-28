/* assertObjectsEqual function which will help us easily test functions that return objects.

Assuming that you've already completed the previous exercise of implementing eqObjects, most of the leg work required to implement the assertion function is already done.

Copy your eqObjects function into this new file.

Your assertion function should leverage this recently implemented function.

*/

// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.

// FUNCTION IMPLEMENTATION


const eqObjects = function(object1, object2) {
    var equalCount = 0;
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    }
    for(let key in object1){
        for(let i in object2){
            if (object1[key] === object2[i]){
                equalCount++;
            }
        }
    }
    if (equalCount === Object.keys(object1).length){
        return true;
    }
  };


const assertObjectsEqual = function(actual, expected) {
    if(eqObjects(actual, expected) === true){
        console.log("These two objects are in fact equal!")
    }
  };
  
