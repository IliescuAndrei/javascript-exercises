const sumAll = function(a, b) {
    let result = 0
    if (typeof a == "number" && typeof b == "number" && a > -1 && b > -1) {
        if (a < b) {
            for (i=a;i<=b;i++) {
                result += i;
            }
        } else {
            for (i=b;i<=a;i++) {
                result += i;
            }
        }
        return result
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
