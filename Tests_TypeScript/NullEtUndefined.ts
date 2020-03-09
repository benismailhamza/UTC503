let firstName4 = "Evelyn";
let age = 34;
let isHuman = true;

let rank: undefined = undefined;
// Compilation Error TS2322: Type ’undefined’ is not
// assignable to type ’string’

//firstName4 = undefined;
// Compilation Error TS2322: Type ’undefined’ is not
// assignable to type ’number’

//age = undefined; // OK
// Compilation Error TS2322: Type ’null’ is not
// assignable to type ’boolean’

//isHuman = null; // OK
// Compilation Error TS2322: Type ’null’ is not
// assignable to type ’undefined’

//rank = null;
//Type 'null' is not assignable to type 'undefined'.ts(2322)
