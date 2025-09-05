// let age: number =20;
// if(age<50)
//     age+=10;


// let houseNumber: number[] = [12,45]

// let user: [string, number]= ["davis", 12]
// console.log(user[1])

// console.log(user[1].toString)


// enum Size {Small = 10, Medium , Large}

// let newsize: Size = Size.Small
// console.log(newsize)



// function testFunc(age:number): number{

//     //temporarily removing return type will return undefined
//     if(age<20){
//         return age*10;
//     }

//     return age+=1;
// }

// type Employee={
//     name:string, 
//     salary:number,
//     retire:(date:Date)=>void
// }

// let employee:Employee= {name:"bea", salary:1200, retire:(date:Date)=> date}



// console.log(employee)



//Narrowing the weight 
// function myFunct(weight: string | number){
//     if(typeof(weight) == "number"){
//         return weight*2
//     }
//     else{
//         return weight
//     }
// }
// myFunct(12)
// myFunct("age")



// type Quantity =50 |100

// let quantity: Quantity =100
// console.log(quantity)



function greet(name:string | null| undefined){
    if(name){
        console.log(name.toUpperCase())
    }
    else{
        console.log("Hola!")
    }
}

greet(undefined)