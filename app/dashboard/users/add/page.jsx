import { addUser } from "@/app/library/actions"
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css"

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="text" placeholder="email" name="email" required />
        <input type="text" placeholder="password" name="password" required />
        <input type="text" placeholder="phone" name="phone" required />
        <select name="isAdmin" id="isAdmin" defaultValue="default">
          <option value="default" disabled>
            is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive" defaultValue="default">
          <option value="default" disabled>
            is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea name="description" id="description" rows="16"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage
