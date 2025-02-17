import express from 'express'
import morgan from 'morgan'
import path from 'path' // Aquí se importa el módulo path

const app = express()

app.use(morgan('dev'))

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(process.cwd(), 'public')))

// Ruta principal que renderiza index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'))
})

app.listen(3000, () => {
  console.log('Server running port http://localhost:3000')
})
