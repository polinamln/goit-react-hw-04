import { IoSearchCircleSharp } from "react-icons/io5";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit, searchQuery }) {
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={onSubmit}>
        <input
          name="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button className={css.btn} type="submit">
          <IoSearchCircleSharp className={css.icon} />
        </button>
      </form>
    </header>
  );
}
// добавить валидацию
// ля сповіщень використовуй бібліотеку React Hot Toast.
