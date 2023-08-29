const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    Product_Name: {
    type: String,
    required: [true, "Please provide a product name"],
  },
  Category: {
    type: String,
    required: [true, "Please provide  categary"],
  },
  Brand_Name: {
    type: String,
    required: [true, "Please provide a brand name"],
  },
  Product_image: {
    type: String,
    required: [true, "Please provide a product image"],
  },
  Price: {
    type: Number,
    required: [true, "Please provide a price"],
  },
  Unit_Name: {
    type: String,
    required: [true, "Please provide a Unit Name"],
  },
  Unit_quantity: {
    type: String,
    required: [true, "Please provide a unit quentity"],
  },
  Product_description: {
    type: String,
    required: [true, "Please provide a product_description"],
  },
  

});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;