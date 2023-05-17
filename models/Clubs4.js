

// Create a schema for the files collection
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  contentType: { type: String, required: true },
  data: { type: Buffer, required: true }
});

const Image = mongoose.model('Image', imageSchema);

const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  images: [imageSchema]
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = { Gallery, Image };
