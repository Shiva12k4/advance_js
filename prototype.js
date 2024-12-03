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

