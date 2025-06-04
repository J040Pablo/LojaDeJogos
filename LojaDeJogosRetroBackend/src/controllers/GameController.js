const GameModel = require("../models/GameModel");

module.exports = {
  // Inserir um jogo
  insertOne: async (req, res) => {
    try {
      const { code, name, price, description, image } = req.body;

      // Verifica se um jogo com o mesmo código já existe
      const existingGame = await GameModel.findOne({ code });
      if (existingGame) {
        return res.status(400).json({ message: "Código duplicado" });
      }

      // Cria o novo jogo com os campos fornecidos
      const newGame = new GameModel({ code, name, price, description, image });
      const result = await newGame.save();

      res.status(201).json({
        message: "Jogo adicionado com sucesso!",
        content: result,
      });
    } catch (error) {
      res.status(400).json({
        message: "Erro ao adicionar Jogo",
        content: error.message,
      });
    }
  },

  // Encontrar um Jogo por código
  findOne: async (req, res) => {
    try {
      const { code } = req.params;
      const result = await GameModel.findOne({ code });

      if (result) {
        const { _id, __v, ...rest } = result.toObject();
        res.status(200).json({
          message: "Jogo encontrado com sucesso!",
          content: rest,
        });
      } else {
        res.status(404).json({
          message: "Jogo não encontrado!",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Erro ao buscar o Jogo",
        content: error.message,
      });
    }
  },

  // Remover um Jogo por código
  deleteOne: async (req, res) => {
    try {
      const { code } = req.params;
      const result = await GameModel.deleteOne({ code });

      if (result.deletedCount > 0) {
        res.status(200).json({
          message: "Jogo removido com sucesso!",
          content: result,
        });
      } else {
        res.status(404).json({
          message: "Jogo não encontrado!",
        });
      }
    } catch (error) {
      res.status(400).json({
        message: "Jogo não pode ser removido",
        content: error.message,
      });
    }
  },

  // Encontrar todos os Jogos
  findAll: async (req, res) => {
    try {
      const result = await GameModel.find({});
      res.status(200).json({
        message: "Jogos encontrados",
        content: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "Erro ao buscar jogos",
        content: error.message,
      });
    }
  },

  // Atualizar um jogo por código
  updateOne: async (req, res) => {
    try {
      const { code } = req.params;
      const updateData = req.body;

      // Evita a atualização do campo 'code' para manter a unicidade
      if (updateData.code && updateData.code !== code) {
        const existingGame = await GameModel.findOne({ code: updateData.code });
        if (existingGame) {
          return res.status(400).json({ message: "Código duplicado" });
        }
      }

      const updatedGame = await GameModel.findOneAndUpdate(
        { code },
        updateData,
        { new: true }
      );

      if (updatedGame) {
        res.status(200).json({
          message: "Jogo atualizado com sucesso!",
          content: updatedGame,
        });
      } else {
        res.status(404).json({
          message: "Jogo não encontrado!",
        });
      }
    } catch (error) {
      res.status(400).json({
        message: "Erro ao atualizar Jogo",
        content: error.message,
      });
    }
  },

  // Adicionar uma promoção a um Jogo
  addPromotion: async (req, res) => {
    try {
      const { code } = req.params;
      const { promotionPrice } = req.body;

      // Validação do preço promocional
      if (
        promotionPrice === undefined ||
        promotionPrice === null ||
        isNaN(promotionPrice)
      ) {
        return res.status(400).json({ message: "Preço promocional inválido" });
      }

      const game = await GameModel.findOne({ code });

      if (!game) {
        return res.status(404).json({ message: "Jogo não encontrado!" });
      }

      // Atualiza o preço promocional
      game.promotionPrice = promotionPrice;
      await game.save();

      res.status(200).json({
        message: "Promoção adicionada com sucesso!",
        content: game,
      });
    } catch (error) {
      res.status(400).json({
        message: "Erro ao adicionar promoção",
        content: error.message,
      });
    }
  },

  // Remover a promoção de um jogo
  removePromotion: async (req, res) => {
    try {
      const { code } = req.params;
      const game = await GameModel.findOne({ code });

      if (!game) {
        return res.status(404).json({ message: "Jogo não encontrado!" });
      }

      if (!game.promotionPrice) {
        return res
          .status(400)
          .json({ message: "Este jogo não possui promoção ativa." });
      }

      // Remove o preço promocional
      game.promotionPrice = undefined;
      await game.save();

      res.status(200).json({
        message: "Promoção removida com sucesso!",
        content: game,
      });
    } catch (error) {
      res.status(400).json({
        message: "Erro ao remover promoção",
        content: error.message,
      });
    }
  },
};
