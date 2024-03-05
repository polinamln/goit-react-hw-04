import css from "./ImageCard.module.css";

export default function ImageCard({ cardPhoto }) {
  return (
    <div>
      <img className={css.img} src={cardPhoto.urls.small} alt="" />
    </div>
  );
}
