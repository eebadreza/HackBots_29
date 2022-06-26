const express=require('express');
const path=require('path');
const fileupload=require('express-fileupload');

let initial_path=path.join(__dirname, "public");

const app=express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/',(req,res)=>{
    res.sendFile(path.join(initial_path, "home.html"));
})
app.get('/editor',(req,res)=>{
    res.sendFile(path.join(initial_path, "editor.html"));
})

//upload link
app.post('/upload', (req,res)=>{
    let file=req.file.image;
    let data =new Data();
    //image name
    let imagename=data.getData()+data.getTime()+file.name;
    //image upload path
    let path='public/img'+ imagename;
    //creat upload
    file.mv(path,(err,result)=>{
        if(err){
            throw err;
        }else{
            //our image upload path
            res.json('img/${imagename}')
        }
    })

})
app.listen("3000", ()=>{
    console.log('listening......')
})
