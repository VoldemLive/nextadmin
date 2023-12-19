import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill></Image>
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action="submit" className={styles.form}>
          <label>Username</label>
          <input type="text" placeholder="username" name="username" required />
          <label>Email</label>
          <input type="text" placeholder="email" name="email" required />
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            required
          />
          <label>Phone</label>
          <input type="text" placeholder="phone" name="phone" required />
          <label>Address</label>
          <textarea name="address" id="address" rows="5"></textarea>
          <label>is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>{" "}
          <label>is Active?</label>
          <select name="isAdmin" id="isAdmin">
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
