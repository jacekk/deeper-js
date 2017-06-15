const isObject = require('../../src/isObject');

test('recognizes valid objects', function () {
    expect(isObject({})).toBeTruthy();
    expect(isObject({ foo: 'bar' })).toBeTruthy();
});

test('recognizes functions as valid objects', function () {
    expect(isObject(() => {})).toBeTruthy();
    expect(isObject(function () {})).toBeTruthy();
});

test('handles primitives as non objects', function () {
    expect(isObject(123)).toBeFalsy();
    expect(isObject('123')).toBeFalsy();
    expect(isObject('abc')).toBeFalsy();
    expect(isObject(true)).toBeFalsy();
});

test('handles null and undefined', function () {
    let declaredVar;
    expect(isObject(declaredVar)).toBeFalsy();
    expect(isObject()).toBeFalsy();
    expect(isObject(null)).toBeFalsy();
    expect(isObject(undefined)).toBeFalsy();
});
