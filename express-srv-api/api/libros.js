import model from '../model/libros.js'

const getLibros = id => {
    return id ? model.getLibro(id) : model.getLibros()
}

const saveLibro = libro => {
    return model.saveLibro(libro)
}

const updateLibro = (libro, id) => {
    return model.updateLibro(libro, id)
}

const deleteLibro = id => {
    return model.deleteLibro(id)
}

export default {
    getLibros,
    saveLibro,
    updateLibro,
    deleteLibro
}

