import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchPhotos } from "../src/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { toast } from "react-hot-toast";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [photos, setPhotos] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements.searchInput.value;

    setSearchQuery(inputValue);
  };

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    async function getPhotosData() {
      try {
        setPhotos([]);
        const data = await fetchPhotos(searchQuery);
        setPhotos(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    getPhotosData();
  }, [searchQuery]);

  return (
    <div>
      <SearchBar searchQuery={searchQuery} onSubmit={onSubmit}></SearchBar>
      <ImageGallery galleryPhotos={photos}></ImageGallery>
    </div>
  );
}

export default App;
