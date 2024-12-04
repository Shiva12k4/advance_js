class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{ //extends works as prototype in fn
constructor(username,email,password){
    super(username)
    this.email=email
    this.password=password
}

addCourse(){
    console.log(`New course was added by ${this.username}`);
    
}

}

const tea= new Teacher('chai','tea@gmail.com',1234);
tea.addCourse();


const tea2= new User('chai2');

// tea2.addCourse(); tea2 does not have access of addcourse
tea2.logMe(); // tea2 have access of logme

console.log(tea===tea2);//false
console.log(tea === Teacher);//false
console.log(tea instanceof Teacher);//true

//JavaScript mein, instance ka matlab hai ek aisa object(tea) jo kisi class(teacher) ya constructor function ke through banaya gaya ho. Agar ek object kisi specific class ka "example" ya "instance" hai, to uska matlab hai ki wo us class ke properties aur methods ko inherit karta hai.



