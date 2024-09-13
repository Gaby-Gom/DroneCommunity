import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    dni: {
      type: Number,
      required: true,
    },
    telefono: {
      type: Number,
      required: true,
    },
    pais: {
      type: String,
      required: true,
    },
    provincia: {
      type: String,
      required: true,
    },
    ciudad: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    cp: {
      type: String,
      required: true,
    },

    gender: {
      type: Boolean,
      required: true,
    },

    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ListingOne = mongoose.model('ListingOne', listingSchema);

export default ListingOne;
