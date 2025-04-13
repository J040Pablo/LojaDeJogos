const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    // Registro de usuário
    register: async (req, res) => {
        try {
            const { username, email, password } = req.body;

            // Verifica se o e-mail já está registrado
            const existingUser = await UserModel.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'E-mail já registrado' });
            }

            // Criptografa a senha
            const hashedPassword = await bcrypt.hash(password, 10);

            // Cria o novo usuário
            const newUser = new UserModel({ username, email, password: hashedPassword });
            const result = await newUser.save();

            res.status(201).json({ message: 'Usuário registrado com sucesso!', content: result });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao registrar usuário', content: error.message });
        }
    },

    // Login de usuário
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await UserModel.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Credenciais inválidas' });
            }

            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ message: 'Login bem-sucedido', token });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao fazer login', content: error.message });
        }
    },

    insertOne: async (req, res) => {
        try {
            const hash = await bcrypt.hash(req.body.password, Number(process.env.ROUNDS));
            const user = req.body;
            user.password = hash;
            const result = await UserModel.create(user);
            res.status(201).json({
                message: 'Usuário adicionado com sucesso!',
                content: result
            });
        } catch (error) {
            res.status(400).json({
                message: 'Usuário duplicado!',
                content: error
            });
        }
    },

    findOne: async (req, res) => {
        try {
            const result = await UserModel.findOne({ email: req.params.email }); // Usando email como identificador
            if (!result) {
                return res.status(404).json({
                    message: 'Usuário não encontrado!',
                });
            }
            const { _id, __v, ...rest } = result.toObject();
            res.status(200).json({
                message: 'Usuário encontrado com sucesso!',
                content: rest
            });
        } catch (error) {
            res.status(500).json({
                message: 'Erro ao encontrar o usuário!',
                content: error.message
            });
        }
    },

    deleteOne: async (req, res) => {
        try {
            const result = await UserModel.deleteOne({ email: req.params.email }); // Usando email como identificador
            if (result.deletedCount === 0) {
                return res.status(404).json({
                    message: 'Usuário não encontrado!',
                });
            }
            res.status(200).json({
                message: 'Usuário removido com sucesso!',
                content: result
            });
        } catch (error) {
            res.status(400).json({ message: 'Usuário não pode ser removido', content: error.message });
        }
    },

    findAll: async (req, res) => {
        try {
            const result = await UserModel.find({});
            res.status(200).json({ message: 'Usuários encontrados', content: result });
        } catch (error) {
            res.status(404).json({ message: 'Não há usuários', content: error.message });
        }
    },

    updateOne: async (req, res) => {
        try {
            const { email } = req.params; // Usando email como identificador
            const updatedUser = await UserModel.findOneAndUpdate({ email }, req.body, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ message: 'Usuário não encontrado para atualização' });
            }
            res.status(200).json({ message: 'Usuário atualizado com sucesso!', content: updatedUser });
        } catch (error) {
            res.status(400).json({ message: 'Erro ao atualizar usuário', content: error.message });
        }
    }
};