
const { Router } = require("express")
const { getLivros, patchLivro, getLivro, deleteLivro, postLivro } = require("../controladores/livros")

const router = Router()

router.get('/',  getLivros)

router.get('/:id',  getLivro)

router.post('/', postLivro)
router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)



module.exports = router