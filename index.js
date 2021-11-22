import express from "express";
import mongoose from 'mongoose'
import Expenses from './models/Expenses.js'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
mongoose.connect('mongodb://localhost/expenseTracker')
.then(console.log("Connect db to expenseTracker "))

const app= express();
app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(compression())
app.get('/api/expenses',async(req,res)=>{
const expenses=await Expenses.find().sort({date:-1})
res.json(expenses);
})
app.post('/api/expenses',async (req,res)=>{
    const expense = new Expenses({name:req.body.name,price:req.body.price,date:req.body.date});
    
    await expense.save()
    res.json({expense});
})
app.listen(4000,()=>{
    console.log('app is listening to 4000')
});
