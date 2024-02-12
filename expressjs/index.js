const express=require('express')
const path = require('path')


const app = express();
const StaticwebPath= path.join(__dirname,'Staticweb')

app.set('view engine','ejs');

app.get('',(_,res)=>{
    res.sendFile(`${StaticwebPath}/index.html`)
})
app.get('/profile',(_,res)=>{
    const user = {
        name: 'ibtisam Haider',
        email: 'ibtisam@test.com',
        city: 'Peshawar',
        skills: ['php', 'react','node','js']
    }
    res.render('profile',{user})
})
app.get('/login',(_,res)=>{
    res.render('login')
})
app.get('/Home',(_,res)=>{
    res.sendFile(`${StaticwebPath}/Home.html`)
})
app.get('/about',(_,res)=>{
    res.sendFile(`${StaticwebPath}/about.html`)
})
app.get('*',(_,res)=>{
    res.sendFile(`${StaticwebPath}/404.html`)
})

// app.use(express.static(StaticwebPath))

// app.get('',(req,res)=>{
//     res.send("<h1>Welcome, Ibtisam</h1> <a href='/aboutUs'>About Us Page</a>");
// });


// app.get('/aboutUs',(req,res)=>{
//     // Rendering HTML data with Backticks
//     res.send(`<input type='text' placeholder="username" value="${req.query.name}"/> <button>Click here</button> 
//     <a href='/'>HomePage</a>`);
// });

// // Randering Json Data
// app.get('/HelpPage',(req,res)=>{
//     res.send([
//     {
//     name:'ibtisam',
//     email:'ibtisam@test.com'
//     },
//     {
//     name:'ibtisam',
//     email:'ibtisam@test.com'
//     }
// ]);
// });

// app.listen(5000);