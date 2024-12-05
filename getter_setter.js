//Getter aur setter ka use JavaScript me kisi object ki property ko safely access aur update karne ke liye hota hai. Iska fayda ye hota hai ki aap property ko access karne ya update karne se pehle kuch validation ya logic laga sakte ho.

//jb bhi hm getter use krenge uske saath saath setter bhi use krna hoga 

class User{
    constructor(userName,email){
        this.userName=userName;
        this.email=email
    }
    get userName(){
        return this._userName.toUpperCase() //hmesha retrun krega getter, get mtlb memory se lekr aaya
    }

    set userName(value){
        this._userName=value;                //return nhi krega qki ye set kr rah h , set krke  
                                                                         //memory m vapas bhej dega
    }
}
const shivam=new User('shivam','shivam@gmail.com')
console.log(shivam.userName);


//_ ka use hmne isliye kiya qki constructor bhi value set krta h or setter bhi krta h toh conflict hoga agr hm direct this.userName likenge getter and setter m.




//old method 
const User2 = {
    _email: 'h@hc.com',
    _password: "abc",
    get email() {
    return this._email.toUpperCase()
    },
    set email(value) {
    this._email = value
    }
    }
    const tea = Object.create(User2)
    console.log(tea.email);
    