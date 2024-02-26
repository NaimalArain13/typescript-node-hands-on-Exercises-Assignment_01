// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Cars: Write a function that stores information about a car in a Object.
function carCreators(manufacturer, model, optional) {
    return __assign({ manufacturer: manufacturer, model: model }, optional //this will accepts N number of key-value pairs  (Arbitary numbers of keyword arguments)
    );
}
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
var myCar = carCreators("Toyota", "Corolla2022", { color: "white", year: 2022, type: "auto" });
// Print the Object that’s returned to make sure all the information was stored correctly.
console.log(myCar);
