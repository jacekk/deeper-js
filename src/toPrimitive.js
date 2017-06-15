var isObject = require('./isObject');

module.exports = function toPrimitive(x) {
    if (!isObject(x)) {
        return x;
    }
    if (!isObject(x.valueOf())) {
        return x.valueOf();
    }
    if (!isObject(x.toString())) {
        return x.toString();
    }

    throw TypeError('input cannot be converted to primitive');
};
