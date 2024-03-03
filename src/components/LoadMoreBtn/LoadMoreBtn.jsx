import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <button onClick={onClick} className={css.btn} type="submit">
      Load more
    </button>
  );
}
