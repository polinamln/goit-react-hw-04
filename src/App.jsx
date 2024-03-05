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
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { toast } from "react-hot-toast";
import { useRef } from "react";

function App() {
  Modal.setAppElement("#root");

  const [searchQuery, setSearchQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(false);

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
        setIsLoading(true);
        setError(false);

        const data = await fetchPhotos(searchQuery, page);
        setTotalPages(data.total_pages);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data.results];
        });

        scrollTo();

        if (data.results.length === 0) {
          setError(true);
        }

        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getPhotosData();
  }, [searchQuery, page]);

  const galleryRef = useRef();

  const scrollTo = () => {
    const galleryScroll = galleryRef.current.getBoundingClientRect();

    console.log(galleryScroll);

    window.scrollTo({
      top: galleryScroll.top,
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit}></SearchBar>
      {error && <ErrorMessage></ErrorMessage>}
      <ImageGallery
        ref={galleryRef}
        openModal={openModal}
        galleryPhotos={photos}
      ></ImageGallery>
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
