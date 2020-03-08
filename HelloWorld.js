// define the class with constructor

var Author = /** @class */ (function () {
    function Author(Name) {
        this.Name = Name;
    }
    return Author;
}());

// create the instance of the class

var author = new Author("Alexandre Moro");

// print the information in the console

console.log("\nHello Cnam");
console.log(author.Name);
