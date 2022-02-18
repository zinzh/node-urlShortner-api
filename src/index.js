require('./db/mongoose');
const express = require('express');
const { url } = require('inspector');
const urlRouter = require('./routes/url');
const redirectRouter = require('./routes/redirect')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(urlRouter)
app.use(redirectRouter)


app.listen(port, () => {
    console.log('server is running on port ', port)
})