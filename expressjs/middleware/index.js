const express = require('express');
const app = express();

const reqFilter=(req,res,next)=>{
    if(!req.query.age)
    {
        res.send("Provide Age")
    }
    else if(req.query.age<18)
    {
        res.send("You Cannot Acces this page")
    }
    else
    {
        next();
    }
}

// app.use(reqFilter)

app.get('/',(req,res)=>{
    res.send('welcome to Homes Page')
})
app.get('/users', reqFilter, (req,res)=>{
    res.send('welcome to User Page')
})
app.get('/about',(req,res)=>{
    res.send('welcome to About Page')
})

app.listen(5000)