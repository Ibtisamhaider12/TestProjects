const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname,'crud');
const filePath= `${dirPath}/apple.jsx`;
//for Creating File
// fs.writeFileSync(filePath,'rfce');

//for Reading File
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })

// Update File
// fs.appendFile(filePath,'and file name is apple.jsx',(err)=> {
//     if(!err) console.log('file is updated');
// })

// Rename File
// fs.rename(filePath,`${dirPath}/banana.jsx`,(err)=>{
//     if(!err) console.log('file name is updated');
// })

// Delete File
// fs.unlinkSync(`${dirPath}/banana.jsx`)