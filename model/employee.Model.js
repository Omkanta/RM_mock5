const mongoose=require("mongoose");

const employeeSchema=mongoose.Schema({
    Fname:{type:String,required:true},
    Lname:{type:String,required:true},
    email:{type:String,required:true},
    salary:{type:Number,required:true},
    dept:{type:String,required:true},
},{
    versionKey:false
})

const EmployeeModel=mongoose.model("employee",employeeSchema)

module.exports={EmployeeModel}