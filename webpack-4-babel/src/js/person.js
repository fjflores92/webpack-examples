var Person = function(name, age) {
    this.name = name;
    this.age = age;
    var self = this;
    return {
        name: self.name,
        age: self.age,
        sayHello: function() {
            alert("Hello, my name is " + self.name);
        },
        tellAge: function() {
            alert("I'm " + self.age + " years old.");
        }
    };
}

module.exports = Person;