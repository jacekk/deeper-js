const curry = function (originalFn) {
    return function curried(...outerArgs) {
        if (outerArgs.length >= originalFn.length) {
            return originalFn(...outerArgs);
        }
        return function (...innerArgs) {
            return curried(...outerArgs.concat(innerArgs));
        }
    };
};

// OR without spread and rest operators

const normArgs = (args) => Array.prototype.slice.call(args);

const oldStyleCurry = function (originalFn) {
    return function oldStyleCurryWrapper() {
        const args = normArgs(arguments);

        if (args.length >= originalFn.length) {
            return originalFn.apply(null, args);
        }

        return function () {
            return oldStyleCurryWrapper.apply(null, args.concat(
                normArgs(arguments)
            ));
        }
    };
};

module.exports = {
    curry,
    oldStyleCurry,
}
