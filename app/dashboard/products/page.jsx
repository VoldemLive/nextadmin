import styles from "../../ui/dashboard/products/products.module.css"
import Search from "@/app/ui/dashboard/search/serch"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import { fetchProducts } from "@/app/library/data"
import { deleteProduct } from "@/app/library/actions"

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || ""
  const page = searchParams?.page || 1
  const { count, products } = await fetchProducts(q, page)
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
          {products.map((item) => (
            <tr key={item.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    className={styles.productImage}
                    alt=""
                    src={item.img || "/noproduct.jpg"}
                    width={40}
                    height={40}
                  ></Image>
                  {item.title}
                </div>
              </td>
              <td>{item.description}</td>
              <td>${item.price}</td>
              <td>{item.createdAt?.toString().slice(4, 16)}</td>
              <td>{item.stock}</td>
              <td>
                <div className={styles.actions}>
                  <Link href={`/dashboard/products/${item.id}`}>
                    <button className={`${styles.button} ${styles.btnview}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={item.id} />
                    <input
                      type="submit"
                      value="Delete"
                      className={`${styles.button} ${styles.btndelete}`}
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

export default ProductsPage
