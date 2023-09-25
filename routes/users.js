const express = require("express");
const router = express.Router();
const userModel = require('../models/User');


//OBETENER TODOS LOS USUARIOS
router.get('/vertodoslosusuarios', async (req, res) => {
    try {
        const usuarios = await userModel.find()
        res.status(200).send(usuarios);
    } catch (error) {
        console.log(error);
    }
})

//CREAR UN USUARIO
router.post('/crearusuario', async (req, res) => {
    try {
        await userModel.create(req.body);
        res.status(200).send("Usuario creado exitosamente!");
    } catch (error) {
        console.log(error)
    }
})

//BUSCAR UN USUARIO POR ID
router.get('/buscarusuarioid/:id', async (req, res) => {
    try {
        const id = req.params.id;
        let usuario = await userModel.findById(id)
        usuario.contraseña = "********";
        // usuario.contraseña = null;

        usuario.contraseña

        console.log(usuario.contraseña)
        res.status(200).send(usuario);
    } catch (error) {
        console.log(error);
    }
})

//EDITAR DATOS DEL USUARIO
router.put('/actualizarusuarioid/:id', async (request, response) => {
    try {
        const usuario = await userModel.findByIdAndUpdate(request.params.id, request.body, {new: true});
        usuario.contraseña = "********";
        response.status(200).send(usuario)
    } catch (error) {
        console.error(error)
    }
})


module.exports = router;