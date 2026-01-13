require('dotenv').config();
const express = require('express');
const path = require('node:path');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extends: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (request, response) => {
    response.render('pages/home', { title: "Home Page" });
});
app.get('/login', (request, response) => {
    response.render('pages/login', { title: "Login Page" });
});
app.post('/login', (request, response) => {
    const { email, password } = request.body;

    if (email === "bill@bill.com" && password === "12345") 
    {
        response.render('pages/greet', { title: "Greet Page", email: email, password: password});
        return;
    }
    else 
    {
        response.send("Not authorized!");
        return;
    }
});
app.get('/logout', (request, response) => {
    response.render('pages/home', { title: "Home Page"});
});