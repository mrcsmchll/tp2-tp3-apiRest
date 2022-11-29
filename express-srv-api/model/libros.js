const libros = [
    {id:'1', titulo: 'The Haunting of Hill House', autor: 'Shirley Jackson', año: '1959'},
    {id:'2', titulo: 'The Road', autor: 'Cormac McCarthy', año: '2006'},
    {id:'3', titulo: 'World War Z', autor: 'Max Brooks', año: '2006'},
    {id:'4', titulo: 'Rebecca', autor: 'Daphne du Maurier', año: '2013'},
    {id:'5', titulo: 'Neuromancer', autor: 'William Gibson', año: '1984'}
]

const getLibros = _ =>{
    return libros
}

const getLibro = id => {
    return libros.find(libro => libro.id == id)
}

const saveLibro = libro => {
    const id = parseInt(libros[libros.length-1].id) + 1
    libro.id = String(id)
    libros.push(libro)
    return libro
}

const updateLibro = (libro, id) => {
    libro.id = id
    const index = libros.findIndex(libro => libro.id == id)
    libro.id = String(id)
    libros.splice(index, 1, libro)
    return libro
}

const deleteLibro = id => {
    const index = libros.findIndex(libro => libro.id == id)
    const libro = libros.splice(index, 1)[0]
    return libro
}

export default {
    getLibro,
    getLibros,
    saveLibro,
    updateLibro,
    deleteLibro
}
