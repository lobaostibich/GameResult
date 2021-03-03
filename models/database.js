const Sequelize = require('sequelize')

const sequelize = new Sequelize('jogo', 'lobao', '123456', {
    host: 'localhost',
    dialect:'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}