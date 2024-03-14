// server.js

// Imports
const express=require('express')
const path=require('path')
const cors=require('cors')

// Initialize Express.js
const app=express()

//Middleware
app.use(cors())

// Serve Static Build
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Fallback
app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

// Deployment
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
