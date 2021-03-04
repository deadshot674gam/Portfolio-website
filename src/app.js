const geocode = require('./geocode')
const starmap = require('./starmap')
const express = require('express')
const path = require('path')

const app = express()

const staticpath = path.join(__dirname,'../static')

app.set('view engine','hbs')

app.use(express.static(staticpath))
app.get('',(req,res)=>{
    geocode('Kanpur',(coordinates)=>{
        starmap(coordinates,(imageurl)=>{
            res.render('index',{
                url:imageurl
            })
        })
    })

})

app.listen(5000,()=>{
    console.log('Server running in port 5000')
})
// geocode("Kanpur",starmap)