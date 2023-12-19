"use client"

import styles from "./search.module.css"
import { MdSearch } from "react-icons/md"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebounce, useDebouncedCallback } from "use-debounce"

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const handleSearch = useDebouncedCallback((e) => {
    const query = e.target.value
    const params = new URLSearchParams(searchParams)

    params.set("page", 1)
    if (e.target.value && e.target.value.length > 2) {
      params.set("q", e.target.value)
    } else {
      params.delete("q")
    }
    replace(`${pathname}?${params}`)
  }, 200)

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        className={styles.searchinput}
        placeholder={placeholder}
        onChange={handleSearch}
      ></input>
    </div>
  )
}

export default Search
