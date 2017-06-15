const toPrimitive = require('./toPrimitive');

module.exports = function eq(x, y) {
    if (typeof x == typeof y) {
        return true;
    }
    if (x === null && y === undefined) {
        return true;
    }
    if (x === undefined && y === null) {
        return true;
    }
    if (typeof x === 'number' && typeof y === 'string') {
        return x === Number(y);
    }
    if (typeof x === 'string' && typeof y === 'number') {
        return Number(x) === y;
    }
    if (typeof x === 'boolean') {
        return Number(x) === y;
    }
    if (typeof y === 'boolean') {
        return x === Number(y);
    }
    if (
        !!~['number', 'string', 'symbol'].indexOf(typeof x) &&
        typeof y === 'object'
    ) {
        return eq(x, toPrimitive(y));
    }
    if (
        !!~['number', 'string', 'symbol'].indexOf(typeof y) &&
        typeof x === 'object'
    ) {
        return eq(toPrimitive(x), y);
    }

    return false;
};
