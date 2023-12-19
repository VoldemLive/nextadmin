import { User } from "./model"
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
