function setUserName(username){
    //complex db calls
    this.username=username;
}
function createUser(username,email,password){
    setUserName(username);//not work it represent global context
    setUserName.call(this,username)//correct by using call it refers to current object context.
    this.email=email;
    this.password=password;
}
const data= new createUser('ens',"ens@enterprises","****");
console.log(data);
