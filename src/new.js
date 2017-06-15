const isObject = require('./isObject');

module.exports = function NEW(constructor, args) {
    const newObj = {};

    newObj.__proto__ = constructor.prototype;
    const constructed = constructor.apply(newObj, args);

    if (isObject(constructed)) { // replace isObject
        return constructed;
    }

    return newObj;
};
