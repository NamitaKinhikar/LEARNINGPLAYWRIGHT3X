let config = {};
config.browser = "Chrome";
config.timeout = 3000;
config.timeout = 5000; // latest
console.log(config); // { browser: 'Chrome', timeout: 5000 }

delete config.browser; //it will deleted browser property from config object
console.log(config);  //{ timeout: 5000 }