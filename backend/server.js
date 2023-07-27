const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path')
const fs = require('fs')


const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(express.static(path.join(__dirname,'public')))

const newUserAddF =  ()=>{
      

 
}

// newUserAddF()



app.post('/signup',(req,res)=>{
    let parsedData = []
    console.log('req.body',req.body.userName)
    // res.send(req.body)
    fs.readFile('data/users.json', "utf8", (error, jsonFile) => {
        if (error) {
         console.log(error)
         return;
        }
        else{

          
         
            parsedData = JSON.parse(jsonFile)
            // console.log(parsedData)
            // console.log(req.body)
            // parsedData.forEach(value=> console.log(value.userName) )
           let check =  parsedData.every((value)=>{
            return value.userName != req.body.userName
           })
           console.log(check)
           if(!check){
            console.log('bu adda istifadeci var')
            res.send(JSON.stringify(0))
           } 
            
            else{
                parsedData.push(req.body)  
                fs.writeFile('data/users.json', JSON.stringify( parsedData), (error) => {
                    if (error) {
                        console.log("error: ", error);
                        return;
                    }
                    console.log("Hazirdir");
                    res.send(JSON.stringify(1))
                });
            }
            
             
          
        }
      })

   
})

app.listen(9000)