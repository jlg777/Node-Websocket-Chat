import express from 'express'
import { createServer } from 'http'
import morgan from 'morgan'
import path from 'path' // Aquí se importa el módulo path
import { Server } from 'socket.io'
import dotenv from 'dotenv';
dotenv.config();


const app = express()

app.use(morgan('dev'))
const server = createServer(app)
const io = new Server(server)

import { createClient } from "@libsql/client";

export const turso = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

await turso.execute(`
  CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content TEXT
  )
  `)

io.on('connection', (socket) => {
  console.log('a user conected')
  io.emit('chat message', 'usuario conectado')

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(process.cwd(), 'public')))

// Ruta principal que renderiza index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'))
})

server.listen(3000, () => {
  console.log('Server running port http://localhost:3000')
})
