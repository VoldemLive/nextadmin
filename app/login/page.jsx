import styles from "@/app/ui/login/loginPage.module.css"

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h2>Login</h2>
        <input type="text" placeholder="username" name="username" required />
        <input
          type="password"
          placeholder="password"
          name="username"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
