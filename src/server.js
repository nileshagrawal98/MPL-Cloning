const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const connect = require('./config/db');
const path = require('path');

app.use(express.json());
app.set('view engine', 'ejs');



app.use(favicon(path.join(__dirname,'public','images','favicon.png')));

const articleController = require('./controller/article.controller');

app.use('/articles', articleController);
app.use(express.static(__dirname + '/public'));

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/article_post', (req, res) => {
    res.render('article_post');
});



const start = () => {
    app.listen(3000, async () => {
        await connect();

        console.log("Listening on port 3000");
    });
}

module.exports = start;