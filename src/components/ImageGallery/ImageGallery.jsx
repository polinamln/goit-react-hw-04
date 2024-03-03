import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ galleryPhotos, openModal }) {
  return (
    <ul className={css.ul}>
      {galleryPhotos.map((photo) => (
        <li
          onClick={() => {
            openModal(photo);
          }}
          className={css.li}
          key={photo.id}
        >
          <ImageCard cardPhoto={photo}></ImageCard>
        </li>
      ))}
    </ul>
  );
}
