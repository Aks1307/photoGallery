import { useState, useEffect } from "react";
import axios from "axios";

function createURL(data) {
  const photoURL = [];
  data.map(({ server, id, secret }) => {
    const url = ` https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;
    photoURL.push(url);
  });
  return photoURL;
}

function usePhotoLoad(pageNumber) {
  const [loading, setLoading] = useState(false);
  const [hasMore, sethasMore] = useState(false);
  const [errors, setErrors] = useState(false);
  const [photos, setPhoto] = useState([]);

  useEffect(() => {
    setLoading(true);
    setErrors(false);
    const fetchPhoto = async () => {
      try {
        const { data } = await axios({
          method: "GET",
          url: "https://www.flickr.com/services/rest",
          params: {
            method: "flickr.photos.getRecent",
            api_key: "30f016f5fe1c1fa8edef09c4d9945381",
            format: "json",
            nojsoncallback: 1,
            per_page: 10,
            page:pageNumber
          },
        });
        const photo = createURL(data.photos.photo);

        setPhoto((prevPhoto) => [...prevPhoto, ...photo]);
        sethasMore(data.photos.page < data.photos.pages);
        setLoading(false);
      } catch (err) {
        setErrors(err);
      }
    };
    fetchPhoto();
  }, [pageNumber]);

  return { loading, errors, photos, hasMore };
}

export default usePhotoLoad;
