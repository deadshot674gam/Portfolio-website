const geocode = require('./geocode')
const starmap = require('./starmap')
const express = require('express')
const path = require('path')
const e = require('express')
const app = express()

const staticpath = path.join(__dirname,'../static')

app.use(express.static(staticpath))
app.get('',(req,res)=>{

})

app.listen(5000,()=>{
    console.log('Server running in port 5000')
})
// geocode("Kanpur",starmap)