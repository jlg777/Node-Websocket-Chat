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
const io = new Server(server, {
  connectionStateRecovery: {}
})

import { createClient } from "@libsql/client";

export const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

await db.execute(`
  CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content TEXT
  )
  `)

io.on('connection', async (socket) => {
  console.log('a user conected')
  io.emit('chat message', 'usuario conectado')

  socket.on('chat message', async (msg) => {
    let result
    try {
       result = await db.execute({
        sql: `INSERT INTO messages (content) VALUES (:msg)`,
        args: {msg}
      })
    } catch (error) {
      console.error(error)
    }
    if (result && result.lastInsertRowid) {
      console.log('ID de mensaje insertado:', result.lastInsertRowid.toString());  // Verifica el valor
      io.emit('chat message', msg, result.lastInsertRowid.toString());  // Emite el mensaje con el ID
    } else {
      console.error('Inserción fallida o lastInsertRowid no encontrado');
    }
  })

  //console.log(result.lastInsertRowid.toString())
  if(!socket.recovered) {
    try {
      const result = await db.execute({
        sql: 'SELECT id, content FROM messages WHERE id > ?',
        args: [socket.handshake.auth.serverOffset ?? 0]
      })
      result.rows.forEach(row => {
        socket.emit('chat message', row.content, row.id.toString(), row.user)
      })
    } catch (error) {
      console.error(error)
    }
  }

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
