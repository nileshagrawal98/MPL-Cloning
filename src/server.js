const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const connect = require('./config/db');
const path = require('path');
require('dotenv').config();

app.use(express.json());
app.set('view engine', 'ejs');



app.use(favicon(path.join(__dirname,'public','images','favicon.png')));

const articleController = require('./controller/article.controller');

app.use('/articles', articleController);
app.use(express.static(__dirname + '/public'));

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/', (req, res) => {
    res.render('blog');
});

app.get('/article_post', (req, res) => {
    res.render('article_post');
});


const port = process.env.PORT || 3000;

const start = () => {
    app.listen(port, async () => {
        await connect();

        console.log(`Listening on port ${port}`);
    });
}

module.exports = start;