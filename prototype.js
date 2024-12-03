let myName="shivam     ";
//console.log(myName.trim().length);  it is working but we want 
// this method to work    console.log(myName.trueLength);

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`true length is${this.trim().length}`);
    
    
}
myName.trueLength();
"ram".trueLength();
let hero=['thor','spiderman'];

let heroPower={
    thor:'hammer',
    spiderman:'sling',
    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }

}

Object.prototype.shivam=function(){
    console.log(` shivam is present in all object `);
    
}
heroPower.shivam()
hero.shivam()

//here what we do from line 18 to 22 is that , hmne directly object ko access kiya or usme shivam method inject kr dia.
//ab hm jante h agr obj m ye shivam method milega toh ab array, string or others m bhi shivam ko acces kr skenge.


//now we give power to only array and check will it goes to object or not .
Array.prototype.satyam=function(){
    console.log(`satyam is present in array`);
    
}
hero.satyam();//got output
// heroPower.satyam();//error


//inheritence

const user={
    username:"js",
    email:"shivam@gmail.com"
}

const teacher={
    makevideo:true
}

const teachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'js Assignment',
    fullTime:true,
    __proto__: teachingSupport
}

teacher.__proto__=user;

console.log(TASupport.isAvailable);//tasupport inherit property of teaching support
console.log(teacher.email);  //teacher inherit property from user .



//modern syntax of inheritence

Object.setPrototypeOf(teachingSupport,teacher);
//teachingsupport-->teacher