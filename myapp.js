/* Functions & Subroutines Example */

function makeCoffee (sugar, milk){
    var instructions = "Boil water, "; 
    instructions += "pour into cup, ";
    instructions += "add coffee granules, ";
    instructions += "add " + sugar + " spoon of sugar, "; 
    instructions += "add " + milk + "% milk."; 
    return instructions;
}

console.log ( makeCoffee ( 2, 50) );

/* Creating an object list*/

var Car = {
    /* Below are referred as the properties of the object */
    color : "red",
    speed : 200,
    /* Function inside an object is referred as METHOD */
    drive : function() {
      return "drive";  
    }
};

console.log (Car);

/* When we call the Car object in the console, it will display all the properties and functions passed inside it */


/* Creating an array of shopping list */

var shoppinglist = [
    "Apple",
    "Orange",
    "Banana"
];

console.log (shoppinglist);

/* list of array automatically assign the address. Also, arrays are 0 indexed. */


/* creating an object with multiple objects and arrays embedded inside it */

var car = {
    make : "Honda",
    speed : 200,
    /* object within an object */
    engine: {
        size: 2,
        make: "BMW",
        fuel: "Petrol",
        /* array inside an object */
        pistons: [ { maker : "BMW1"} , { maker : "BMW2"} ]
    },

    /* fuction inside an array is called Method and is addressed with a name */

    drive: function () {
        return "drive";
    },

    
    Car_types : [
        {
            type : "Diesel Car",
            milage: 20
        },
        {
            type: "Luxuries Car",
            milage: 16
        },
        /* array inside an array */
        [
            "embedded", 200 , null
        ],

        /* But function inside an array is not addressed with a name */ 
        function () {
            return "drive";
        } 
    ]
}

/* Member Access (.) - You can evoke the value of particular property of the object and arrays in console */
console.log (car.engine.pistons);

/* Computed Member Access () - are used to evoke the value of objects inside an arrays and functions also */
console.log (car.engine.pistons[1]); 
console.log (car.engine.pistons[1].maker);
console.log (car.Car_types[3]());

/* The values inside the arrays are referred as javascript statements.
 So we can dynamically calculate the value of the array number */

a=10;
console.log( car.Car_types[a - 2 - 6 + 1] );

/* Also with computed member access with an console the property of an object. 
Therefore, we can only use one between member access (.) and computed member access ( [] )*/

console.log (car [ "make"] );
console.log (car ["engine"]["pistons"][1]["maker"]);
    
/* Assignment operator */

console.log ( car.make += 200);

car.engine = {newengine: "new"};
console.log (car);

/* Creating a new member or function */
car.model = "v60";
console.log (car);

/* Deleting the particular property or function of an object */
delete car.make;
console.log (car);

delete car.drive;
console.log(car);

/* we have predefined javascript functions to modify an array */

/* Suppose to remove the first pointer from the array, shift function is used */
car.Car_types.shift();
console.log(car.Car_types);

/* To remove last pointer from an array, pop function is used */
car.Car_types.pop();
console.log(car.Car_types);

/* To add more array pointers like string, number, object, arrays etc at the beginning,
 unshift function is used */
car.Car_types.unshift("First string", 00, {}, []);
console.log(car.Car_types);

/* To add multiple, pointers like string, number, object, arrays etc at the end, 
push function is used */
car.Car_types.push("Add at the end", 1009, drive= function () { return "drive";} );
console.log(car.Car_types);

/* Splice method is used to add or remove the properties, functions or objects from array in between or from the middle */
/* To delete the pointer from specific pointer */
/*syntax: NameOfTheArray.splice (the pointer number from where to want to start , Number of pointer you want to remove ); */
car.Car_types.splice(3,4);
console.log(car.Car_types);

/* To add more memory pointer without deleting*/
/* syntax: NameOfTheArray.splice (the pointer number from where to add , 0, Add infinite number of string, numbers or functions  ); */
car.Car_types.splice(1,0, "Kareena", 19, []);
console.log(car.Car_types);

/* to replace the memory pointer with something else */
/* syntax: NameOfTheArray.splice (the pointer number from where to replace , Number of pointer want to remove, Add infinite number of string, numbers or functions  ); */
car.Car_types.splice(2, 2, "car types");
console.log(car.Car_types);

/* Callable objects are the objects or function inside another object or function */

function GST() {
    var totalGST = 200;
    function add(value){
        return 100 + value;
    }
    return add(totalGST);
} 

// function to call the name based on the object
function fullname(name) {
    return name.firstname + name.lastname;
}
 
console.log(fullname({firstname:" Swati" , lastname:"Badhwar"}));

function sumofvar(a,b) {
    return a+b;
}
 
console.log(sumofvar(10,20));

/* Constructor function */

// Always start a constructor function name with capital letter,
function Apple(x, y, color, size) {
    this.x=x;
    this.y=y;
    this.color=color;
    this.size=size;
}

console.log( new Apple(10,20,"Red","Big"));

/* The prototype are shared object. They allow us to share properties and methods across a range of objects.
The prototype object is attached to the callable object that is the constructor.
And when we construct an object from that constructor it is automatically linked to that callable prototype object*/

function  Apple(color, weight) {
    this.color = color;
    this.weight = weight;
}

Apple.prototype={
    eat : function () {
        if (this ===apple2){
            return "eat apple 2"
        };
        if (this ===apple1){
            return "eat apple 1"
        };

    },
    throw : function () {
        return "Throw the apple";
    }
}

var apple1 = new Apple ("red" , 29);
var apple2 = new Apple ("green" , 67);
var apple3 = new Apple ("white" , 99);