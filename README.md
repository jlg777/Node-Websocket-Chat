<div> <p style="text-align:center"> <img align="center" src="./public/programador.png" alt="JuveYell" width="300px"> </p> </div> <h2 align="center" style="color:#CD5C5C">JLG'777' <img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="22" /></h2> <p align="center"> <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=4000&pause=1000&multiline=true&random=false&width=435&lines=Un+proyecto+creado+por+J0RG1T0" alt="Typing SVG" /></a> </p> <hr>


## 📧 Conéctate conmigo:

[![GMAIL](https://img.shields.io/badge/Gmail-Gmail?style=white&logo=Gmail&logoColor=white&color=%23EA4335)](proyectojlg777@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-LinkedIn?style=white&logo=LinkedIn&logoColor=white&color=%230A66C2)](https://linkedin.com/in/)
[![Discord](https://img.shields.io/badge/Discord-Discord?style=white&logo=Discord&logoColor=white&color=%235865F2)](jorgeg777#9720)

## 🎫 Socket Chat Example

_Este es un proyecto simple de chat en tiempo real usando Socket.IO, Express y LibSQL. Los usuarios pueden conectarse al servidor, enviar mensajes y ver los mensajes enviados por otros usuarios en tiempo real._

## 🪢 Descripción

Este proyecto es una aplicación básica de chat en tiempo real que utiliza:

- Socket.IO para la comunicación en tiempo real entre el servidor y el cliente.
- Express para la creación de la API del servidor.
- LibSQL para la gestión de la base de datos donde se almacenan los mensajes.

### Tecnologías utilizadas

**Node.js**
**Express** (Framework de servidor)
**Socket.IO** (Biblioteca para la comunicación en tiempo real)
**LibSQL** (Base de datos SQLite en la nube)
**HTML/CSS** (Para la interfaz del cliente)
**dotenv** (Gestión de variables de entorno)

### Requisitos previos
Para correr este proyecto, necesitas tener instalado:

* Node.js (preferiblemente la última versión estable).
* npm o yarn (gestores de paquetes de Node.js).

## 🔧 Instalación

#### 🧍‍♂️ Clonar el repositorio en tu máquina local:

```bash
Copiar
git clone https://github.com/tu_usuario/socket-chat-example.git
```
#### 🚢 Navegar al directorio del proyecto

```bash
cd socket-chat-example
```

#### 🚨 Instalar dependencias

```bash
npm install
```

#### 🧪 .env
Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:

```bash
TURSO_DATABASE_URL=tu_url_de_base_de_datos
TURSO_AUTH_TOKEN=tu_token_de_autenticación
```

[!NOTE]: Necesitarás una base de datos en Turso para almacenar los mensajes. Si no tienes una, puedes crear una cuenta en Turso y obtener tus credenciales.

#### 🏃‍♂️‍➡️ Ejecución
Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

```bash
npm run dev
```
Esto iniciará el servidor en http://localhost:3000.

### 🚀 Estructura del proyecto
La estructura del proyecto es la siguiente:

```text
socket-chat-example/
├── public/
│ ├── index.html # Página de cliente
├── src/
│ ├── server/
│ │ ├── index.js # Lógica del servidor y manejo de WebSockets
├── .env # Variables de entorno
├── package.json # Configuración del proyecto
└── README.md # Este archivo
```

### 💽 Funcionalidad
* **Interfaz de usuario**: El cliente está compuesto por un formulario de entrada de texto y una lista de mensajes. Los mensajes se envían en tiempo real y se actualizan en la interfaz sin necesidad de recargar la página.

* **Servidor**: El servidor maneja las conexiones de Socket.IO, escucha los mensajes enviados por los clientes y los almacena en una base de datos SQLite (utilizando LibSQL). Los mensajes son enviados de vuelta a todos los clientes conectados.

* **Base de datos**: Los mensajes enviados se almacenan en una base de datos. En el inicio de la conexión, el servidor recupera todos los mensajes almacenados anteriormente, enviándolos al cliente para que puedan ser mostrados.

### 🕛 Flujo de Trabajo

- Conexión del Cliente: Cuando un usuario se conecta, el servidor envía un mensaje indicando que el usuario se ha conectado.

- Envío de Mensajes: Cuando el usuario envía un mensaje desde el cliente, el servidor lo almacena en la base de datos y emite el mensaje a todos los demás clientes conectados.

- Recuperación de Mensajes: En el inicio de la conexión de un nuevo cliente, se recuperan los mensajes almacenados en la base de datos desde el último mensaje visto.

## 📄 Licencia
Este proyecto está bajo la Licencia MIT - mira el archivo LICENSE.md para detalles.

## 🎁 Expresiones de Gratitud
- Comenta a otros sobre este proyecto 📢
- Invita una cerveza 🍺 o un café ☕ a alguien del equipo.
- Da las gracias públicamente 🤓.
- Dona con cripto a esta dirección:
    * (btc) 16ApGFxMXfF8ktysSkmLBzLEJPHubtwKjp
    * (btc-SegWit) bc1q0v8fvv3gvga02h9xspcg7npghjfyny20lavc37
    * (Ethereum) 0x1ee2842c194c95bc54473c6b27d602fc0bfc81a9
---
⌨️ con ❤️ por JLG777 😊

_Copyright (c) [2025] [jlg777]_
