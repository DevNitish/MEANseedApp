/* *This file is for data modeling.
Use this file for functions that need DB query 
 */
var mongoose=require('mongoose');
var userSchema=new mongoose.Schema(
{	name:String,
	email:{type:String,unique:true},
	password:String
});

userSchema.statics.findAllUser=function(callback)
{
	this.find({

	},function(err,data)
	{		if(!err){
				callback(null,data);
				console.log("data-----",data);
			}
			else{
				console.log("data err-----",err);
				callback(err,null);
			}
				
	})
}

userSchema.statics.saveUser=function(userDetails, callback)
{		
	this.create({
		email:userDetails.email,
        name:userDetails.name,
		password:userDetails.password
    
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
     
}


module.exports=mongoose.model('users',userSchema);
