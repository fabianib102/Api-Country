import express from 'express'
import countries from './routes/countries'

const app = express()

app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  res.send('pongdawdawd')
})

app.use('/api/countries', countries)

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})
