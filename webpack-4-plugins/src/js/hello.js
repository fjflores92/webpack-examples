console.log("Load hello.js module.");

module.exports = function(name) {
    var greeting = "Hello " + name + "!"
    return greeting;
};