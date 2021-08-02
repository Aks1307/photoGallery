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

function saveToLoalStorage(data){
    let searchList = [];
    
    searchList = JSON.parse(localStorage.getItem('photoSeach')) || [];
    //Show and store only last 5 Search Query 
    if(searchList && searchList.length > 4){
        searchList.pop();
        searchList.unshift(data);
    }else if(data){
        searchList.unshift(data);
    }
   
    localStorage.setItem('photoSeach', JSON.stringify(searchList));
}

function usePhotoSearch(pageNumber,query) {
  const [loading, setLoading] = useState(false);
  const [hasMore, sethasMore] = useState(false);
  const [errors, setErrors] = useState(false);
  const [photos, setPhoto] = useState([]);


  useEffect(() => {
    setPhoto([])
  }, [query])

  useEffect(() => {
    setLoading(true);
    setErrors(false);
  
    const fetchPhoto = async () => {
      try {
        const { data } = await axios({
          method: "GET",
          url: "https://www.flickr.com/services/rest",
          params: {
            method: "flickr.photos.search",
            api_key: "30f016f5fe1c1fa8edef09c4d9945381",
            format: "json",
            nojsoncallback: 1,
            per_page: 10,
            page:pageNumber,
            text:query
          },
          
        });
        const photo = createURL(data.photos.photo);
        saveToLoalStorage(query)
        setPhoto((prevPhoto) => [...prevPhoto, ...photo]);
        sethasMore(data.photos.page < data.photos.pages);
        setLoading(false);
      } catch (e) {
        if (axios.isCancel(e)) return
        setErrors(e);
      }
    };
    fetchPhoto();
   
  }, [pageNumber,query]);

  return { loading, errors, photos, hasMore };
}

export default usePhotoSearch;
