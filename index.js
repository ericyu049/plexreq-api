const express = require('express');
const api = require('./src/controller/api');

const app = express();
const port = 8085;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

app.get('/health', (response) => {
    response.send('Application is healthy.');
})
app.listen(port, ()=> {
    console.log("Application listening on port", port);
})