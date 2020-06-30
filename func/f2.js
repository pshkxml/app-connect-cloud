/**
  * main() will be invoked when you Run This Action.
  *
  * When enabled as a Web Action, use the following URL to invoke this action:
  * https://{APIHOST}/api/v1/web/{QUALIFIED ACTION NAME}?location=Austin
  *
  * For example:
  * https://openwhisk.ng.bluemix.net/api/v1/web/myusername@us.ibm.com_myspace/get-http-resource/location?location=Austin
  *
  * In this case, the params variable will look like:
  *     { "location": "Austin" }
  *
  */

const needle = require('needle');
const axios = require('axios');
const i_headers = { 'Content-Type': 'application/json',
		            'accept': 'application/json'
};

// url сервсиа на получение курсов
var i_url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

//async function main() {
function main() {    
    let l_reqparams = {  headers: i_headers };
    console.log('FFFFFFFF');
   /* return { statusCode: 500,
             headers: { 'Content-Type': 'application/json' },
             body: { message: 'err.message' }
    };*/  
    
	return  axios.get(i_url, l_reqparams)
	.then ( result_exch => {
	    
	   if (result_exch.status === 200) {
	   
	       console.log('OOOOOKKKKKKK');
	   } else {
	       console.log('EEEEERRRRRRRR');
	   }    
	   console.log(  JSON.stringify(result_exch.data) );
	   return Promise.resolve(  
	            {  statusCode: 200, 
	               headers: { 'Content-Type': 'application/json' },
	               body:   result_exch.data })
	    
	})
	.catch ( err => {
	    console.log(err);
	    return Promise.reject( { statusCode: 500,
             headers: { 'Content-Type': 'application/json' },
             body: { message: err.message }
        }) 
	});
	
	
};

exports.main = main;

main();
