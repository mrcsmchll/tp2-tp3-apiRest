import express from 'express'
import router from './router/libros.js'

const app = express();
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/ping', (req,res)=>{
    res.send('pong')
})

app.use('/libros', router)


const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on('error', error =>{
    console.log(`Error en el servidor ${error.message}`)
})