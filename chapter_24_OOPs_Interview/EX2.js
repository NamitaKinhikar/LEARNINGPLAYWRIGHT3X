class Envirnment
{
    constructor(name="Stagging", port=3000)
    {
        this.name=name;
        this.port=port;
    }
    getURL()
    {
       return "http://"+ this.name + ":" + this.port;
    }
}
let env1= new Envirnment();
let env2= new Envirnment("Production", 8080);

console.log(env1.getURL());   //http://stagging:3000
console.log(env2.getURL());  //http://production:8080
