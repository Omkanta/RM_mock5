const express=require("express");
const { connection } = require("./db");
const cors=require("cors");
require("dotenv").config();
const {userRouter} =require("./routes/user.routes");
const { employeeRouter } = require("./routes/employee.routes");
const { auth } = require("./middleware/auth.middleware");
const app=express();
app.use(express.json());
app.use(cors());

app.use("/users",userRouter);

app.use(auth)
app.use("/employee",employeeRouter);


app.listen(8080,async()=>{
    try {
        await connection
        console.log("Connected to DB");
        console.log(`Server is running at port 8080`);
    } catch (error) {
        console.log(error);
    }
})