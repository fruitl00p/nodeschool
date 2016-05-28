"use strict";

function reduce(arr, fn, initial) {
    function reducer(index, value) {
        if (index > arr.length - 1) {
            return value;
        }
        return reducer(index + 1, fn(value, arr[index], index, arr));
    }
    return reducer(0, initial);
}

module.exports = reduce;