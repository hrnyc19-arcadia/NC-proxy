const fs = require('fs');
const storeAMockupListing = require('./controller').storeAMockupListing;


;( function() {
    let reviewArr;
    fs.readFile('./server/db/MOCK_DATA.json',(err, json)=>{
        if (err) {
            throw err;
        }
        reviewArr =JSON.parse(json.toString());     
        console.log(reviewArr);  
         

        reviewArr.forEach(JSONObj=> storeAMockupListing(JSONObj,(err,data)=>{
           if(err)console.log(err);
           else console.log('freshly baked in db: ',data);            
       }));        
    });
})();