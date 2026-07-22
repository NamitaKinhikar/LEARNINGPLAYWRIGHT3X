let enviornment = "Stagging";
let baseURL= enviornment === "Prod"
? "htttps://api.example.com"
: "https://stagging-api.example.com";

console.log(baseURL);
