const isObject = x => x !== null && ~['function', 'object'].indexOf(typeof x);

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
