interface StringDictionary 
{
    [key: string]: string;
}

const dict: StringDictionary = 
{
    hello: "world",
    foo: "bar"
};
console.log("Print hello="+ dict.hello);
console.log("Print foo="+ dict.foo);