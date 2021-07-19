const express=require("express");
const path=require("path");
const app=express();
const port=8000;


// For serving static files
app.use('/static', express.static('static'))
app.use(express.urlencoded())


app.set('view engine', 'pug')
// Set the views directory
app.set('views', path.join(__dirname, 'views'))
 


app.get('/', (req, res)=>{
    const params={}
    res.status(200).render('home.pug', params);
})


app.get('/contact', (req, res)=>{
    const params={}
    res.status(200).render('contact.pug', params);
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});