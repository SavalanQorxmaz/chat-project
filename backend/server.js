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

app.get('/',(req,res)=>{
    console.log(req.body)
    res.send({
        data: 'get method ready'
    })
})

console.log('salam')

app.listen(9000)