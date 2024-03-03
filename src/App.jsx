import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchPhotos } from "../src/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "../src/components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { Toaster } from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";

function App() {
  Modal.setAppElement("#root");

  const [searchQuery, setSearchQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  function openModal(photo) {
    setModalPhoto(photo);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onSubmit = (newQuery) => {
    setSearchQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    async function getPhotosData() {
      try {
        setPhotos([]);
        setIsLoading(true);

        const data = await fetchPhotos(searchQuery, page);
        // setPhotos(data.results);
        setTotalPages(data.total_pages);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data.results];
        });
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getPhotosData();
  }, [searchQuery, page]);

  return (
    <div>
      <SearchBar onSubmit={onSubmit}></SearchBar>
      <ImageGallery openModal={openModal} galleryPhotos={photos}></ImageGallery>
      {photos.length > 0 && !isLoading && page < totalPages && (
        <LoadMoreBtn onClick={handleClick}></LoadMoreBtn>
      )}
      {isLoading && <Loader></Loader>}
      <Toaster position="bottom-center" />
      <ImageModal
        modalPhoto={modalPhoto}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      ></ImageModal>
    </div>
  );
}

export default App;
