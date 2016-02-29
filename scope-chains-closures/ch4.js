function foo() {
    "use strict";
    var bar;
    quux = 'test';
    function zip() {
        var quux;
        bar = true;
    }
    return zip;
}