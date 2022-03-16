//  variable types
//      boolean
//      number (integers and floats)
//      string
//      any (supports "any" datatype in the variable)
//      many others - see typescriptlang.org


// let variableName type = initialValue;

let found: boolean = true;
let grade: number = 96.8;
let firstName: string = "Christian";
let lastName: string = "Hall";

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
let myData: any = 50.0;
myData = "Allison";
myData = false;

// console.log statements
console.log(found);
console.log(firstName + " " + lastName);
console.log("Grade: " + grade);

// concatinate strings using backticks and reference varibles with ${}

console.log(`Hi ${firstName} ${lastName}`); 

// arrays - always dynamic, like ArrayLists
let reviews: number[] = [5, 5, 4.5, 1, 3];
let names: string[] = ["Alex", "Abbey", "Liz", "Brian"];
let eightBits: boolean[] = [true, true, false, false, true, false, false, true];

// for loops
let total: number = 0;
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    if (reviews[i] > 3) {
        console.log("pass")
    }
    else {
        console.log("fail");
    }
    total += reviews[i];
}
console.log(`TOTAL SCORE: ${total}/${reviews.length * 5}`);

while (total > 100) {
    console.log(total);
    total+=5;
}
