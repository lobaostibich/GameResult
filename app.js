const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const Jogador = require("./models/Jogador")


app.use(express.static('public'))

app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}))

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    Jogador.findAll({order: [['kill_num', 'DESC']]}).then((jogadores) => {
        res.render('jogador', {
            jogadores: jogadores,
            melhor: jogadores[0].nome,
            vencedor: jogadores[0].vencedor ? jogadores[0].time : jogadores[0].time === "A" ? "B" : "A"
        })
    }).catch((err) => {
        req.flash('error_msg', `Houve um erro ao listar os dados ${err}`)
    })
})

app.listen(8080)