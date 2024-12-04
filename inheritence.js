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
