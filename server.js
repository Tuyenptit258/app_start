const express = require('express')
const ap = express()
const path = require('path')

ap.get('/',function(req,res){
    var duongDanFile = path.join(__dirname,'home.html')
    res.sendfile(duongDanFile)
})

ap.listen('3500', function(req,res){
    
})