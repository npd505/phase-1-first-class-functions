function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction() {
    let foo = () => {console.log("A new function")}
    return foo
}

function returnsAnAnonymousFunction() {
    return function () {console.log("This is an anonymous function")}
}