import { fetchUser } from "@/app/library/data"
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"

const SingleUserPage = async ({ params }) => {
  const { id } = params
  const user = await fetchUser(id)
  console.log(user.phone)
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill></Image>
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action="submit" className={styles.form}>
          <label>Username</label>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={user.username}
            required
          />
          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={user.email}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            required
          />
          <label>Phone</label>
          <input
            type="text"
            placeholder="phone"
            name="phone"
            value={user.phone}
            required
          />
          <label>Address</label>
          <textarea
            name="address"
            id="address"
            rows="5"
            value={user.description}
          ></textarea>
          <label>is Admin?</label>
          <select name="isAdmin" id="isAdmin" defaultValue={user.isAdmin}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>{" "}
          <label>is Active?</label>
          <select name="isAdmin" id="isAdmin" defaultValue={user.isActive}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleUserPage
