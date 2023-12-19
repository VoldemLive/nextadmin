import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from "next/image"

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action="submit" className={styles.form}>
          <label>Title</label>
          <input type="text" placeholder="title" name="title" required />
          <label>Cetegory</label>
          <select name="cat" id="cat">
            <option value="general">Choose a category...</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <label>Price</label>
          <input type="number" placeholder="price" name="price" />
          <label>Stock</label>
          <input type="number" placeholder="stock" name="stock" />
          <label>Color</label>
          <input type="text" placeholder="color" name="color" />
          <label>Size</label>
          <input type="number" placeholder="size" name="size" />
          <label>Description</label>
          <textarea name="desc" id="desc" rows="16"></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage
