function duckCount() {
    return Array.prototype.filter.call(arguments, (obj) => {
        return Object.prototype.hasOwnProperty.call(obj, 'quack');
    }).length;
}

module.exports = duckCount;
