//emp
const express=require("express");
const { EmployeeModel } = require("../model/employee.Model");


const employeeRouter=express.Router();

employeeRouter.get("/",async(req,res)=>{
    try {
        const emp=await EmployeeModel.find();
        res.status(200).send(emp)
    } catch (error) {
        res.status(400).send({"err":error.message})
    }
})

employeeRouter.post("/add",async(req,res)=>{
    try {
        const emp = new EmployeeModel(req.body)
       await emp.save();
        res.status(200).send({"msg":"New employee has been added"})
    } catch (error) {
        res.status(400).send({"err":err.message});
    }
})

employeeRouter.patch("/edit/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        await EmployeeModel.findByIdAndUpdate({_id:id},req.body);
        res.status(200).send({"msg":`The employee with id ${id} has been updated`});
    } catch (error) {
        res.status(400).send({"err":error.message});
    }
})

employeeRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        await EmployeeModel.findByIdAndDelete({_id:id});
        res.status(200).send({"msg":`The employee with id ${id} has been Deleted`});
    } catch (error) {
        res.status(400).send({"err":error.message});
    }
})

module.exports={employeeRouter}

