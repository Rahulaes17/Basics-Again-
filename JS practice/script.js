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

// String Utility Toolkit (Strings + Functions)

let string = "I am Rahul and I am practicing javascript."

function reverse(string){
     return string.split("").reverse().join("");
}
console.log("Reversed String:",reverse(string))

function countVowels(string){
    let vowels = "aeiouAEIOU"
    let count=0

    for(let ch of string){
        if (vowels.includes(ch)){
                count++;
        } 
    }
    return count;
}
console.log("Numbers of vowel are:", countVowels(string))

function uCase(string){
    return string.toUpperCase();
}
console.log(uCase(string))

function removeSpaces(string) {
    return string.replace(/\s+/g, "");
}
console.log(removeSpaces(string))


let str1 = "Race car"
let str2= "Hello"

function isPalindrome(s){
    let str= s.toLowerCase().replace(/\s+/g, "");
    let revStr= str.split("").reverse().join("");

    if (str === revStr){
        return "Yes it is a Palindrome"
    }
    return "Not a Palindrome"
}
console.log(isPalindrome(str1))
console.log(isPalindrome(str2))


//Bank Account Simulator (Objects + Methods + Conditions)

let account = {
    name:"Rahul",
    balance: 1000,
    transactions:[]
}

function deposit(amount){
    if(amount<=0){
       console.log("Invalid amount")
       return;
    }

    account.balance+=amount;

    account.transactions.push({
        type: "deposit",
        amount: amount,
        time: new Date().toLocaleString()
    });

    console.log(`${amount}`, "was deposited.", "Balance:",`${account.balance}`)
}


function withdraw(amount){
    if(amount<=0){
        console.log("Invalid amount");
        return;
    }

    if(amount>account.balance){
        console.log("Insufficient Balance");
        return;
    }

    account.balance-=amount;

    account.transactions.push({
        type:"Withdrawal",
        amount:amount,
        time: new Date().toLocaleString()
    })

    console.log(`${amount}`, "was withdrawn.", "Balance:", `${account.balance}`)
}

function checkBalance(){
    console.log("Balance:", `${account.balance}`)
}

function showHistory(){
    console.log("Transaction History:");
    account.transactions.forEach(t=>{
        console.log(`${t.type}`, "of", `${t.amount}`,"on",`${t.time}`)
    })
}

deposit(8000);
withdraw(2500);
deposit(1500);
withdraw(3200);
checkBalance();
showHistory();