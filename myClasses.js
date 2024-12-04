// //es6 

// class User{
//     constructor(username,email,password){//constructor tb call hoga jb hm new keyword initialize krenge
// this.username=username;
// this.email=email;
// this.password=password;
//     }


// encryptPassword(){
//     return `${this.password}abc`
// }

// capitaliseUser(){
// return`${this.username.toUpperCase()}`
// }
// }
// const user1=new User('shiv','shiv@gmail.com','123');
// console.log(user1);
// console.log(user1.capitaliseUser());
// console.log(user1.encryptPassword());


//behind the scene(same thing if we do by fn)

function User2(username,email,password){
this.username=username;
this.email=email;
this.password=password;
}
User2.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

User2.prototype.capitaliseUser=function(){
    return `${this.username.toUpperCase()}`
}

const user2=new User2('shivam','shiv@gmail.com','456');
console.log(user2.capitaliseUser());

console.log(user2.encryptPassword());