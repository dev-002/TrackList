const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))

// Routes
app.use('/', (req, res)=> {
    res.send('Home Route');
})

app.listen( process.env.PORT || 5000, console.log("Server Running.."));