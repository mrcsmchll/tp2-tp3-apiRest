import api from '../api/libros.js'

const getLibros = (req,res) => {
    const id = req.params.id
    res.json(api.getLibros(id))
}

const postLibro = (req,res) => {
    const libro = req.body
    res.json(api.saveLibro(libro))
}

const putLibro = (req,res) => {
    const id = req.params.id
    const libro = req.body
    res.json(api.updateLibro(libro, id))
}

const deleteLibro = (req,res) => {
    const id = req.params.id
    res.json(api.deleteLibro(id))
}

export default {
    getLibros,
    postLibro,
    putLibro,
    deleteLibro
}