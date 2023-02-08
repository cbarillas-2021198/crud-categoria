//Importacion
const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Categoria = require('../models/categoria');


const getCategorias= async (req = request, res = response) => {

    //Condición, me busca solo los usuarios que tengan estado en true
    const query = { estado: true };

    const listaCategorias = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
    ]);

    res.json({
        msg: 'GET API de Categorias',
        listaCategorias
    });

}



const postCategoria = async(req = request, res = response) => {

    const { categoria, tipo, descripcion, proveedor }  = req.body;
    const categoriaDB = new Categoria({categoria, tipo, descripcion, proveedor});

    const salt = bcryptjs.genSaltSync();
   

    await categoriaDB.save();

    res.json({
        msg: 'POST API de categoria',
        categoriaDB
    });

}

const putCategoria = async (req = request, res = response) => {

    const { id } =  req.params;
    const { _id, estado, ...resto } = req.body;
    const categoriaEditada = await Categoria.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'PUT API de categoria',
        categoriaEditada
    });

}



const deleteCategoria = async(req = request, res = response) => {

    const { id } =  req.params;
    const categoriaEliminada = await Categoria.findByIdAndDelete(id);

    res.json({
        msg: 'DELETE API de categoria',
        categoriaEliminada
    });

}

module.exports = {
    getCategorias,
    postCategoria,
    putCategoria,
    deleteCategoria
}