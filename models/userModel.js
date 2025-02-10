const { hash } = require("bcrypt");
const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    username:String,
   
    email :{ 
        type:string, require:true 
    },
    password: { type:string, require:true,minLenght:8 ,
        match : [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
        " Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special characte"

    ]},
    role :{
        type:string,
        enum:["admin" ,"client "],

    },
    user_image:{
        type:string,require:false,default:"client.png ",
        //etat:Boolean;
        count:Number

    },

    timestemps:true 

});
userSchema.pre("save ",async function(req,res){
    try{ 
        const salt=await bcrypte.gensalt();
        const user=this;
        user.password=await bcrypte.hash(user.password ,salt);
        user.count=user.count+1;
        next();
    }catch(error){
        next(error);
    }

})
user.Schema.post('save',async function (req,res,next) {
    console.log("user created sucessfully ");
    next();

    
})