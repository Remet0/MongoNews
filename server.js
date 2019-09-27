const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
// Handles any requests that don't match the ones above
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})