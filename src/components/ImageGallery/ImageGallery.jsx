import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ galleryPhotos }) {
  return (
    <ul className={css.ul}>
      {galleryPhotos.map((photo) => (
        <li className={css.li} key={photo.id}>
          <ImageCard cardPhoto={photo}></ImageCard>
        </li>
      ))}
    </ul>
  );
}
