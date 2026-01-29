// Student Marks Analyzer (Arrays + Loops + Functions)

let marks =[98,23,54,21,6,36,74,32,64,97,74,67,89];
let highest= 0;
let lowest= 100;
let n= marks.length;
let total=0;

marks.forEach(element => {
    if (element>highest)highest=element;
    if (element<lowest)lowest=element;
    total+=element;
});
console.log("Highest marks is:" , highest)
console.log("Lowest marks is:" , lowest)
console.log("Average marks are:" , total/n)

let passedStudents = marks.filter(m=> m>40)
console.log(passedStudents)

function grade(marks){
    if(marks>=90) return "A+";
    else if(marks>=80 && marks<90) return "A";
    else if(marks>=70 && marks<80) return "B";
    else if(marks>=60 && marks<70) return "C";
    else if(marks>=50 && marks<60) return "D";
    else if(marks>=40 && marks<50) return "E";
    else return "fail";
}

marks.forEach(marks => {
    console.log(`${marks}`,"=", `${grade(marks)}`)
});

