function fn() {
    var firstName = "Alexandre";
    console.log(firstName);
}
// console.log(firsName);
// Cannot find name 'firsName'.
// Une variable déclarée avec le mot­clé
// var a une portée équivalente au bloc fonction dans lequel elle a été définie.
var firstName = "Alexandre";
if (true) {
    var firstName = "Rozenn";
    console.log(firstName);
}
console.log(firstName);
// Dans l’exemple précédent, aucune de ces déclarations n’est faite au sein d’un bloc fonction. La variable
// est donc déclarée deux fois de manière globale. La deuxième déclaration (présente dans le bloc firstName
// if ) écrase la première.
// Différence avec let/const
var firstName2 = "Simon";
if (true) {
    var firstName2_1 = "Elie";
    console.log(firstName2_1);
}
console.log(firstName2);
// pas d'écrasement
var firstName3 = "toto";
