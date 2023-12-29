import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 5,
      max: 255,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 1024,
    },
    phone: {
      type: String,
    },
    img: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      default: "No description",
      min: 10,
      max: 1024,
      trim: true,
    },
  },
  { timestamps: true }
)
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    price: {
      type: Number,
      min: 0,
    },
    stock: {
      type: Number,
      min: 0,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
    img: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "No description",
      min: 10,
      max: 1024,
      trim: true,
    },
  },
  { timestamps: true }
)

export const User = mongoose.models.User || mongoose.model("User", UserSchema)
export const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema)
