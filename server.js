const express=require('express')
const path=require('path')
const cors=require('cors')

const port = process.env.PORT || 5000

const app=express()

app.use(cors)
app.use(express.static(path.join(__dirname, 'client/dist')))

app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname+'client/dist/index.html'))
})

app.listen(port)
console.log(`Server Listening on Port ${port}`)