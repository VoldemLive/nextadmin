"use client"

import { usePathname } from "next/navigation"
import style from "./navbar.module.css"
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className={style.container}>
      <div className={style.title}>{pathname.split("/").pop()}</div>
      <div className={style.menu}>
        <div className={style.search}>
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className={style.searchInput}
          />
        </div>
        <div className={style.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
