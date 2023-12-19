import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        {new Date().getFullYear()} Volodymyr Shynkarov &copy; All rights
        reserved{" "}
      </div>
      <div>Nextadmin</div>
    </div>
  )
}

export default Footer
