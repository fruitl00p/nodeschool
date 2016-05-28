"use strict";

function countWords(inputWords) {
    return inputWords.reduce((ret, word) => {
        ret[word] = ++ret[word] || 1;
        return ret;
    }, {});
}

module.exports = countWords;

