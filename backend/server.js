import express from 'express'

const app = express();


app.get('*', (req, res) => {
	res.send(" Welcome to ts ")
})

app.listen(3000, () => {
	console.log(`Server is running on https://localhost:3000/`);
})
