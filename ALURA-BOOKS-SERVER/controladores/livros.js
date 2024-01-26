const { getTodosLivros, insereLivros, modificaLivro, getLivrosPorId, deletaLivroPorId } = require("../servicos/livros")


function getLivros(req, res) {
    try {
        const id = req.params.id
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function getLivro(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const livro = getLivrosPorId(id)
            res.send(livro)
        } else {
            res.send("id inválido")
            res.status(422)
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        if (req.body.nome && req.body.id) {
            insereLivros(livroNovo)
            res.status(201)
            res.send("Livro inserido com sucesso")
        } else {
            res.status(422)
            res.send("O campo id e o campo nome são obrigatórios!")
        }

    } catch (error) {
        res.status(500)
        res.send({ error })
    }
}
function patchLivro(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const body = req.body
            const livros = modificaLivro(id, body)
            res.send(livros)
        } else {
            res.send("id inválido")
            res.status(422)
        }

    } catch (error) {
        res.status(500)
        res.send({ error })
    }
}
function deleteLivro(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            deletaLivroPorId(id)
            res.send("Livro deletado com sucesso")
        } else {
            res.send("id inválido")
            res.status(422)
        }
    } catch (error) {
        res.status(500)
        res.send({ error })
    }
}


module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}