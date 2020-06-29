console.log("Load hello.js module.");

module.exports = (name) => {
    var greeting = "Hello, " + name + "!"
    return greeting;
};