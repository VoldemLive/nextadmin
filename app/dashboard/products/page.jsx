import styles from "../../ui/dashboard/products/products.module.css"
import Search from "@/app/ui/dashboard/search/serch"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/pagination"

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  className={styles.productImage}
                  alt=""
                  src="/noproduct.jpg"
                  width={30}
                  height={30}
                ></Image>
                Iphone
              </div>
            </td>
            <td>
              sdfsdf sdf a fasdfasdfas dfasdfasdf asdfasdf asdfs dasdf asfd
            </td>
            <td>$123</td>
            <td>Admin</td>
            <td>42</td>
            <td>
              <div className={styles.actions}>
                <Link href="/dashboard/products/test/">
                  <button className={`${styles.button} ${styles.btnview}`}>
                    View
                  </button>
                </Link>
                <Link href="/">
                  <button className={`${styles.button} ${styles.btndelete}`}>
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default ProductsPage
