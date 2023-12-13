import { MdSupervisedUserCircle } from "react-icons/md"
import style from "./card.module.css"
const Card = () => {
  return (
    <div className={style.container}>
      <MdSupervisedUserCircle size={20} />
      <div className={style.texts}>
        <span className={style.title}>Total users</span>
        <span className={style.number}>10.273</span>
        <span className={style.detail}>
          <span className={style.positive}>12%</span> more than previous
        </span>
      </div>
    </div>
  )
}

export default Card
