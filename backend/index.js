import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.json("Hello world")
});

app.listen(3000, () => {
    console.log('Servicor rodando em localhost:3000')
});