"use strict";

function repeat(operation, num) {
    for(let i=0; i<num; i++) {
        operation();
    }
}

function repeatFromSolution(operation, num) {
    if (num<=0) {
        return;
    }
    operation();
    repeat(operation, num--);
}

// Do not remove the line below
module.exports = repeat;