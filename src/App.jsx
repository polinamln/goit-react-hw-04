import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchPhotos } from "../src/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "../src/components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { Toaster } from "react-hot-toast";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const onSubmit = (newQuery) => {
    setSearchQuery(newQuery);
    // setPhotos([]);
    setPage(1);
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
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data.results];
        });
        // setPhotos(data.results);
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
      <SearchBar searchQuery={searchQuery} onSubmit={onSubmit}></SearchBar>
      <ImageGallery galleryPhotos={photos}></ImageGallery>
      {photos.length > 0 && !isLoading && (
        <LoadMoreBtn onclick={handleClick}></LoadMoreBtn>
      )}
      {isLoading && <Loader></Loader>}
      <Toaster position="bottom-center" />
    </div>
  );
}

export default App;
