const removeFromArray = function(...args) {
    let array = args[0];
    for (toRemove of args) {
        if (toRemove === args[0]) {
            continue;
        }

        let index = array.indexOf(toRemove);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
    console.log(array)
    return array
};

// var removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }


// Do not edit below this line
module.exports = removeFromArray;
