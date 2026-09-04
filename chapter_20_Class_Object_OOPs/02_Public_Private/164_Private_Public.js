// Private Fields (#) — Hidden Data
// PUBLIC Fields 
let v = 10;
class Credentials 
{
    #apiKey; // Instance / Class variable
    user;
    constructor(user, key) 
    {
        this.user = user; // public
        this.#apiKey = key;  //private
    }
    // Custom made fuction by us
    pramodgetAuthHeader() 
    {
        return "Bearer " + this.#apiKey;
    }
}
let cred = new Credentials("admin", "scret_key_1234");
// console.log(cred.apiKey); 
// console.log(cred.#apiKey); //it is not accessible outside of class,due to Private field
console.log(cred.user);
console.log(cred.pramodgetAuthHeader());