//  variable types
//      boolean
//      number (integers and floats)
//      string
//      any (supports "any" datatype in the variable)
//      many others - see typescriptlang.org
// let variableName type = initialValue;
var found = true;
var grade = 96.8;
var firstName = "Christian";
var lastName = "Hall";
/*
    let is replacing var as the assignment keyword, it has less pitfalls
        scoping, capturing, shadowing, etc

    this will generate compilation error:
    found = 0;
    grade = A;
    firstName = false;
    lastName = 2099;
    
*/
// any keyword - do not do this if you can avoid it
var myData = 50.0;
myData = "Allison";
myData = false;
// console.log statements
console.log(found);
console.log(firstName + " " + lastName);
console.log("Grade: " + grade);
