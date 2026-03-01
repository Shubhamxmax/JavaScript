const student ={
    name:"Shubham",
    marks:94.4,
    printMarks:function(){
        console.log("marks=",this.marks); //student.marks
    }
}

const employee={
    calTax() {
        console.log("Tax rate is 10%");
    },
    // calTax:function(){ //Not a good practice
    //     console.log("tax rate is 10%")
    // }
}

const Karanarjun={
    salary:50000,
        calTax() {
        console.log("Tax rate is 20%");
    },
}
    

Karanarjun.__proto__=employee; //link the employee object (or now Karanjun have same properties as employee)


//Classes in javaScript

//Example 1

class ToyotaCar {
    constructor(brand,milage){
        console.log("Creating new object");
        this.brand=brand;// variable is created directly
        // this will tell you that variable is an attribute of that class
        this.milage=milage;
    }
    start(){//Dont use function Keyword inside class
        console.log("start")
    }
    stop(){
        console.log("stop");
    }
    // setBrand(brand){
    //         this.brand=brand;
    //     }
    }


let fortuner=new ToyotaCar("fortuner",10); //constructor invoked
console.log(fortuner);
// fortuner.setBrand("fortuner");
//fortuner.brand="fortuner2.0"
let lexus=new ToyotaCar("lexus",20);
console.log(lexus);
// lexus.setBrand("lexus");


//Inheritance in JavaScript

//Example 1

class Parent{
    hello(){
        console.log("Hello")
    }
}
class child extends Parent{

}
let obj=new child();



//Example 2

class person{
    constructor(name){
        console.log("Enter Parent Constructor");
        this.species="homo sapiens";
        this.name=name;
    }
     eat(){
        console.log("eat")
    }
     sleep(){
        console.log("sleep")
    }
    work(){
        console.log("Do Nothing")
    }
     
}
class Engineer extends person{
        constructor(name){//name is of person class
            console.log("Enter Child Constructor")
            super(name);
            console.log("Exit Child Constructor")
        }
        work(){
        super.eat();//we cannot directly call eat 
        console.log("Solve Problems")
    }
     
}

let shubham=new Engineer("Shubham");//shubham added in name
shubham.eat()
let p1=new person("Shiva");

//Practice quesion 1

class User{
    constructor(name1,email1){
        this.name1=name1;
        this.email1=email1;
    }
    viewData(){
        console.log("Name of student :",this.name1);
        console.log("Email of student :",this.email1);
    }
}

let student1=new User("Sourabh","sourabh1234@gmail.com");
student1.viewData();

// Practice question 2

class Users{
    constructor(id,password){
        this.id=id;
        console.log("User Name :",this.id);
        this.password=password;
        console.log("User Email :",this.password);
    }
}

class Admin extends Users{

    constructor(id,password){
            super(id,password);
        }
    
    editData(){
        this.id="Shubham_Bhagat";
        this.password="Shubham@1234"
        console.log("New id :",this.id);
        console.log("New Password :",this.password);
    }
}

let obj1=new Users("Shubham","shubham1234@");
let obj2=new Admin("Shubham","shubham1234@");
obj2.editData();

//Error Handling

let a=2;
let b=3;
console.log("a =",a);
console.log("b =",b);
console.log("a+b =",a+b);
try{
   console.log("a+b = ",a+c) //error
}
catch(error){
    console.log(error);

}
console.log("a+b =",a+b);





