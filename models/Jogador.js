const database = require('./database')

const Jogador = database.sequelize.define('jogadores', {
    nome: {
        type: database.Sequelize.STRING
    },
    time: {
        type: database.Sequelize.STRING
    },
    arma: {
        type: database.Sequelize.STRING
    },
    hs_num: {
        type: database.Sequelize.INTEGER
    },
    pontuacao: {
        type: database.Sequelize.STRING
    },
    vencedor: {
        type: database.Sequelize.BOOLEAN
    },
    kill_num: {
        type: database.Sequelize.INTEGER
    }
})

module.exports = Jogador