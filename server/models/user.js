/* *This file is for data modeling.
Use this file for functions that need DB query 
 */
var mongoose=require('mongoose');
var userSchema=new mongoose.Schema(
{
	email:{type:String,unique:true},
	name:String,
});

userSchema.statics.findAll=function(callback)
{
	this.find({

	},function(err,data)
	{
		console.log("data-----",data);
	})
}


userSchema.statics.insertOne=function(userDetails, callback)
{
	this.create({
		email:'abc@xyz.com',
        name:"Your Name"
    
	},function(err,result)
	{
		if(!err){
            console.log('Data inserted successfully...');
            callback(null, result);
        }
        else{
            console.log('Data Error');

            callback(err, null);
        }

            
	});
     console.log('Data Error 2');

            callback(err, null);
}


module.exports=mongoose.model('users',userSchema);
