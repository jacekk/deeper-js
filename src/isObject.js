module.exports = function isObject(x) {
    if (x === null) {
        return false;
    }
    if (typeof x === 'object') {
        return true;
    }
    if (typeof x === 'function') {
        return true;
    }

    return false;
};
