const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path')


const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(express.static(path.join(__dirname,'public')))

const idList = []

// app.get('/getId',(req,res)=>{
// res.send(JSON.stringify(idList.length))
// idList.push(idList.length)
// })

// app.post('/getData',(req,res)=>{
//     console.log(req.body.id)
//     idList.add(req.body.id)
//     if(req.body.id === '100'){
//         res.send({
//             data: 'get method ready'
//         })
//     }
//     else {
//         res.send({
//             data: 'sen deyilsen'
//         })
//     }
    
// })

// console.log('salam')

app.listen(9000)