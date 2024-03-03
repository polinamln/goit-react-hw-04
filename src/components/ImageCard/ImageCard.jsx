import css from "./ImageCard.module.css";

export default function ImageCard({ cardPhoto, openModal }) {
  return (
    <div
    //   onClick={() => {
    //     openModal(cardPhoto);
    //   }}
    >
      <img className={css.img} src={cardPhoto.urls.small} alt="" />
    </div>
  );
}
