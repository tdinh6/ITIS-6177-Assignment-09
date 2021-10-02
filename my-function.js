app.get('/say', (req, res) => {
	res.send("Thang Dinh says " + req.query.keyword); 

})
