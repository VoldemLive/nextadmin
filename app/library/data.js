import { User, Product } from "./model"
import { connectDB } from "./utils"

export const fetchUsers = async (q, page) => {
  const regexp = new RegExp(q, "i")
  const ITEMS_PER_PAGE = 2
  try {
    connectDB()
    const count = await User.find({ username: regexp }).count()
    const users = await User.find({ username: regexp })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1))
    return { count, users }
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

export const updateUser = async (formData) => {
  const { id, username, email, phone, isAdmin, isActive, description } =
    Object.fromEntries(formData)
  try {
    connectDB()
    await User.findByIdAndUpdate(
      id,
      {
        username,
        email,
        phone,
        isAdmin,
        isActive,
        description,
      },
      { new: true }
    )
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

export const fetchUser = async (id) => {
  try {
    connectDB()
    const user = await User.findById(id)
    return user
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

export const fetchProducts = async (q, page) => {
  const regexp = new RegExp(q, "i")
  const ITEMS_PER_PAGE = 2
  try {
    connectDB()
    const count = await Product.find({ title: regexp }).count()
    const products = await Product.find({ title: regexp })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1))
    return { count, products }
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

export const fetchProduct = async (id) => {
  try {
    connectDB()
    const product = await Product.findById(id)
    return product
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}
