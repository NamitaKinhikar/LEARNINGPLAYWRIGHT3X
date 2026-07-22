let responseTime=850;
let sla=1000;
let slaStatus= responseTime <= sla ? "Within SLA" : "SLA Breached";
console.log("Response:" + responseTime + "ms", "SLA Status: " + slaStatus);
//template Literals- so that we can replace the value in time .
console.log(`what is the SLA Time?- ${sla} ms`);