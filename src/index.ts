import express from 'express';
const app = express();

app.use(express.json());

const PORT = 3000;

app.get('', (_req, res) => {
    console.log('algo');
    res.send('ping')
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})

