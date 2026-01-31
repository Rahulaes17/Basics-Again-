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


//Online Shopping Cart System

const products=[
    {id:01,name:"laptop",price:120000,stock:9},
    {id:02,name:"Computer",price:80000,stock:15},
    {id:03,name:"Mobile",price:60000,stock:24},
    {id:04,name:"Headphone",price:4500,stock:2},
    {id:05,name:"keyboard",price:1200,stock:5},
    {id:06,name:"trimmer",price:2000,stock:13},
    {id:07,name:"mouse",price:600,stock:0},
    {id:08,name:"speaker",price:8000,stock:7},
    ]

let cart=[];

function addToCart(productId,quantity){
    if (quantity <= 0) {
        console.log("Invalid quantity");
        return;
    }
    
    let product = products.find(p=> p.id===productId)

    if(!product){
        console.log("Product not found")
        return
    }
    
    if(quantity>product.stock){
        console.log("Not enough stock")
    }
    
  const cartItem = cart.find(item=> item.id===productId)

    if (cartItem){
        cartItem.quantity+=1;
    }
    else{
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity
        });
    }

    product.stock-= quantity;
    console.log(`${product.name}`,"added to cart");

}

function removeFromCart(productId) {
    const product = products.find(p => p.id === productId);

    if (!product) {
        console.log("Product not found");
        return;
    }

    const cartItem = cart.find(item => item.id === productId);

    if (!cartItem) {
        console.log("Item not in cart");
        return;
    }
    product.stock += 1;

    cartItem.quantity -= 1;

    if (cartItem.quantity === 0) {
        cart = cart.filter(item => item.id !== productId);
    }

    console.log(`${product.name} removed from cart`);
}

function calculateTotal(){
    const subtotal = cart.reduce((sum,item)=>{ return sum + item.price * item.quantity},0);
    let discount = 0

if(subtotal>50000){
    discount = subtotal  * 0.10;
}
    
    finalAmount = subtotal - discount;

    return {
        subtotal,
        discount,
        finalAmount,
    };
}

function generateBill() {
    if (cart.length === 0) {
        console.log("Cart is empty");
        return;
    }

    console.log("BILL SUMMARY");

    cart.forEach(item => {
        console.log(
            `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`
        );
    });

    const { subtotal, discount, finalTotal } = calculateTotal();

    console.log("--------------------------");
    console.log("Subtotal: ₹" + subtotal);
    console.log("Discount: ₹" + discount);
    console.log("Final Total: ₹" + finalAmount;
}

cart = [];
addToCart(1, 1);   // Laptop
addToCart(3, 2);   // Mobile x2
addToCart(4, 1);   // Headphone
generateBill();


// INVALID PRODUCT ID
addToCart(99, 1);

// INVALID QUANTITY
addToCart(2, 0);
addToCart(2, -3);

//OUT OF STOCK ITEM
addToCart(7, 1);  


//ADD SAME ITEM MULTIPLE TIMES
cart = [];
addToCart(5, 2);  
addToCart(5, 3);   
generateBill();


//REMOVE ITEM FROM CART
removeFromCart(5);
removeFromCart(5);
generateBill();

//REMOVE ITEM NOT IN CART
removeFromCart(8);


// REMOVE UNTIL ITEM DISAPPEARS
addToCart(4, 1);   // Headphone
removeFromCart(4);
removeFromCart(4);


// DISCOUNT BOUNDARY TEST
cart = [];
addToCart(4, 1);   // No discount
generateBill();

cart = [];
addToCart(1, 1);   // Discount applied
generateBill();


// EMPTY CART
cart = [];
generateBill();



    
    




