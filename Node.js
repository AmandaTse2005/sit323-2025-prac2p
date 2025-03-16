const path = require("path");
const express = require("express")

const app = express()

app.use(express.urlencoded({extended: false}));
app.use("/public", express.static(path.join(__dirname, "public")));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(3000)


//Detailed Documetation: 
//1. Imported required modules "path" and "express".
//2. Created Express application.
//3. Set up middleware.
//4. Served the index.html file.
//5. For starting the server.