import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { TbUserHeart } from "react-icons/tb";

export default function ImageModal({ closeModal, modalIsOpen, modalPhoto }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  //   console.log(modalPhoto);

  if (!modalPhoto || !modalPhoto.urls) {
    return null;
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img className={css.img} src={modalPhoto.urls.regular}></img>
        <div className={css.div}>
          <p className={css.p}> {modalPhoto.alt_description}</p>
          <p className={css.p}>
            <TbUserHeart />
            Likes: {modalPhoto.likes}
          </p>
        </div>
        <button className={css.btn} onClick={closeModal}>
          close
        </button>
        <div>I am a modal</div>
      </Modal>
    </div>
  );
}
