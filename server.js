const express = require('express'); 
const app = express(); 
const axios = require('axios'); 
const port = 3000; 

app.get('/', (req, res) =>{
	res.send("hello"); 
})
app.get('/say', (req, res) => {
	res.send("Thang Dinh says " + req.query.keyword); 

})
app.listen(port, () => {
	console.log(`App is listening at ${port}`);

})
