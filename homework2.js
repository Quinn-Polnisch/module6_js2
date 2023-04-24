//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function display_person(person){
    let keyList = Object.keys(person)
    // console.log(typeof(person[keyList[4]]))
    for(let i = 0; i < keyList.length; i++){
        if(typeof(person[keyList[i]]) == 'object'){
            for(let j = 0; j < keyList[i].length; j++){
                if(typeof(person[keyList[i]][j]) == 'object'){
                    console.log(`${keyList[i]}:`)
                    display_person(person[keyList[i]][j])
                } else{
                    console.log(`${keyList[i]}: ${person[keyList[i]][j]}`)
                }
            }
        } else{
            console.log(`${keyList[i]}: ${person[keyList[i]]}`)
        }
    }
}

display_person(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    };

    // Use an arrow to create the printInfo method

    printInfo = () => {
        return `Name: ${this.name} Age: ${this.age}`;
    };

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 

    addAge = () => {
        this.age++;
    }
}

let bill = new Person('Bill', 25);

console.log(bill.printInfo())
bill.addAge()
bill.addAge()
bill.addAge()
console.log(bill.printInfo())

let goose = new Person('Goose', 10);

console.log(goose.printInfo())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const stringLength = (str) => {
    return new Promise( (resolve, reject) => {
        if(str.length >= 10){
            resolve(`${str}: Big Word`)
        } else{
            reject(`${str}: Small Word`)
        }
    })
}

// using the js promise

stringLength('testtesttest')
//happy path
.then( (result) => {
    console.log(result)
})
// sad path
.catch( (error) => {
    console.log(error)
})



// codewars


// codewars 1

function solution(str, ending){
    return str.endsWith(ending);
}

// codewars 2

function findOutlier(integers){
    let odd = 0;
    let oddIndex = 0;
    let even = 0;
    let evenIndex = 0;
    for(let i = 0; i < integers.length; i++){
      if(integers[i] % 2 == 0){
        even++;
        evenIndex = i;
      } else{
        odd++;
        oddIndex = i;
      }
    }
    
    if(odd == 1){
      return integers[oddIndex]
    } else{
      return integers[evenIndex]
    }
    
  }