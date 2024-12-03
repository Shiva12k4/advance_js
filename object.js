//In JavaScript, a prototype is a mechanism through which objects inherit properties and methods from other objects.
//In given image image.png , array is inherit property from object same as for string.

//mtlb ye h ki for ex- array inherit krta h object se agr hme jo property array m nhi mil rhi vo object m milengi agr usme bhi nhi h toh null milega or js undefined return kregi .

//this is called prototype inheritence.



//below example shows fn is also object 

function multipleby5(num){
    return num*5;
}
multipleby5.power=2;
console.log(multipleby5(4));
console.log(multipleby5.prototype);
console.log(multipleby5.power);


//use case of new keyword

function createUser(username,score){
    this.username=username;
    this.score=score;
}
createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`price is ${score}`);
    
}
const a=new createUser('shivam',20);
console.log(a);

const b=new createUser('sharma',30);
console.log(b);


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/