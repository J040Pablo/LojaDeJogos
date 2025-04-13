const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definindo o esquema do jogo
const gameSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    promotion: { type: Boolean, default: false }  // Adicionando um campo para promoção, se necessário
});

// Exportando o modelo
module.exports = mongoose.model('Game', gameSchema);