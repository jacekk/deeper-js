const toPrimitive = require('../../src/toPrimitive');

test('converts toPrimitive input type', function () {
    expect(toPrimitive(1)).toBe(1);
    expect(toPrimitive('a')).toBe('a');
    expect(toPrimitive(null)).toBe(null);
});

test('converts object with valueOf happy path', function () {
    var o = {
        valueOf: function() {
            return 1;
        },
        toString: function() {
            return '1';
        }
    };

    expect(toPrimitive(o)).toBe(1);
});

test('converts object with valueOf unhappy path', function () {
    var o = {
        valueOf: function() {
            return {};
        },
        toString: function() {
            return '1';
        }
    };

    expect(toPrimitive(o)).toBe('1');
});

test('fails on inconvertible input', function () {
    var o = {
        toString: function() {
            return {};
        },
        valueOf: function() {
            return {};
        }
    };

    expect(() => {
        toPrimitive(o);
    }).toThrowError(/input cannot be converted to primitive/);
});
