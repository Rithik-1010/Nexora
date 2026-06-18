import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a product title'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
    },
    category: {
      type: String,
      required: [true, 'Please provide a category'],
    },
    brand: {
      type: String,
      required: [true, 'Please provide a brand'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price'],
      default: 0.0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      required: [true, 'Please provide stock quantity'],
      default: 0,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    specifications: {
      type: Map,
      of: String,
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
