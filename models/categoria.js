const { Schema, model } = require("mongoose");

const CategoriaSchema = Schema({
  categoria: {
    type: String,
    required: [true, "La categoria es obligatoria"],
  },
  tipo: {
    type: String,
    required: [true, "El tipo categoria es obligatorio"],
    unique: true,
  },
  descripcion: {
    type: String,
    required: [true, "La descripcion es obligatoria"],
  },
  proveedor: {
    type: String,
    required: [true, "El proveedor es obligatorio"],
  },
  estado: {
    type:Boolean,
    default:true

  }


});

module.exports = model('Categoria', CategoriaSchema);
