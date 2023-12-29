"use server"

import { revalidatePath } from "next/cache"
import { Product, User } from "./model"
import { connectDB } from "./utils"
import { redirect } from "next/navigation"
import bcrypt from "bcrypt"

export const addUser = async (formData) => {
  const saltRounds = 8
  const { username, email, password, phone, isAdmin, isActive, description } =
    Object.fromEntries(formData)

  try {
    const nextsalt = await bcrypt.genSalt(saltRounds)
    const hash = await bcrypt.hash(password, nextsalt)
    connectDB()
    const newUser = new User({
      username,
      email,
      password: hash,
      phone,
      isAdmin,
      isActive,
      description,
    })
    await newUser.save()
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }

  revalidatePath("/dashboard/users")
  redirect("/dashboard/users")
}

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData)
  try {
    connectDB()
    await User.findByIdAndDelete(id)
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }

  revalidatePath("/dashboard/users")
  redirect("/dashboard/users")
}

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData)
  console.log(id)
  try {
    connectDB()
    await Product.findByIdAndDelete(id)
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }

  revalidatePath("/dashboard/products")
  redirect("/dashboard/products")
}

export const addProduct = async (formData) => {
  const { title, category, price, stock, color, size, description } =
    Object.fromEntries(formData)

  try {
    connectDB()
    const newProduct = new Product({
      title,
      category,
      price,
      stock,
      color,
      size,
      description,
    })
    await newProduct.save()
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }

  revalidatePath("/dashboard/products")
  redirect("/dashboard/products")
}
