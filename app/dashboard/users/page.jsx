import { fetchUsers } from "@/app/library/data"
import styles from "@/app/ui/dashboard/users/users.module.css"
import Search from "@/app/ui/dashboard/search/serch"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import { deleteUser } from "@/app/library/actions"

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || ""
  const page = searchParams?.page || 1
  const { count, users } = await fetchUsers(q, page)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>State</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    className={styles.useravatar}
                    alt=""
                    src={user.img || "/noavatar.png"}
                    width={40}
                    height={40}
                  ></Image>
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "admin" : "user"}</td>
              <td>{user.isActive ? "active" : "disabled"}</td>
              <td>
                <div className={styles.actions}>
                  <Link href={"/dashboard/users/" + user.id}>
                    <button className={`${styles.button} ${styles.btnview}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />

                    <input
                      className={`${styles.button} ${styles.btndelete}`}
                      value={"Delete"}
                      type="submit"
                    />
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}

export default UsersPage
