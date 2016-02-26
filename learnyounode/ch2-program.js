var total = process.argv.slice(2).reduce(function(res, value) { return res + Number(value); }, 0);
console.log(total);
