let str2="PlaywriteWithJavaScript";

let str=str2.toLowerCase();
let vcount=0;
let cCount=0;
let str1="";

for(let i=0;i<str.length-1;i++)
{//str.char(i)
  if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u')
  {
    str1= str1+str[i];
    vcount++;
  }
  else
  {
    cCount++;
  }
}
console.log("vowels are =", str1);
console.log("count of vowels are= ",vcount);
console.log("count of consonents are= ",cCount);

