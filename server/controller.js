const db= require('./db/config');
const Listing = require('./db/schema');



const getRandomAmenities=()=>{    
    let allAmenities = ['Kitchen', 'Breakfast','Wifi','Pool', 'Private entrance', 'Garden or backyard', 'Heating', 'Air conditioning', 'Free parking on premises', 'Laptop friendly workspace',  'Smoke detector', 'Luggage dropoff allowed'];
    let amenitiesQty = Math.floor(Math.random() * 12);
    let amenitiesProvided=[];
    let i=0;  
    while(i<amenitiesQty){
        console.log('amenities: ',allAmenities)
        let randomIndex = Math.floor(Math.random() * allAmenities.length);
        amenitiesProvided= [].concat(amenitiesProvided,allAmenities.splice(randomIndex,1))
        i++;
    }   
    console.log('amenities provided :',amenitiesProvided)
    return amenitiesProvided;
}



module.exports.getListingData=function(listing_id,callback){
    console.log('getListingData called, value:',listing_id);    
    
    db.connect();

    Listing.find({'listing_id':listing_id},null,((err, docs)=>{
    if(err) callback(err)      
    else{
        console.log('data retrieved: ',docs);
        let amenities = getRandomAmenities();  
        let responseObj = Object.assign({},docs,{'listing_amenities':amenities});
        callback(null,responseObj);
    }
    db.close(); 
}))
}

module.exports.storeAMockupListing=function(JSONObj,callback){
    db.connect();
    
console.log(JSONObj);

let newListing = new Listing({ 
       
    listing_id: JSONObj.listing_id,
    listing_type: JSONObj.listing_type,
    listing_title: JSONObj.listing_title,
    listing_location: JSONObj.listing_location,
    listing_features: JSONObj.listing_features,
    listing_host: JSONObj.listing_host                  
});

try{
callback(null,newListing.save());
}catch(exception){
    console.log(exception);
    callback(exception);    
}finally{
   db.close(); 
}
};
