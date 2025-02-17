import express from 'express'
import morgan from 'morgan'


const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('<h1>Esto es el chat</h1>')
})

app.listen(3000, () => {
  console.log('Server running port http://localhost:3000')
})

