import { forwardRef } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = forwardRef(({ galleryPhotos, openModal }, ref) => {
  return (
    <ul ref={ref} className={css.ul}>
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
});

ImageGallery.displayName = "ImageGallery";

export default ImageGallery;
