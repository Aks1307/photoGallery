import React, { useEffect, useRef, useCallback, useState } from "react";
import Card from "../components/card";
import PhotosContainer from "../components/photos";
import usePhotoSearch from "../api/usePhotoSearch";
import useDebounce from "../util/useDebounce";

function SearchPage({query}) {
  const [pageNo, setPageNo] = useState(1);
  const debouncedSearchTerm  = useDebounce(query,800);
  const { photos, hasMore, loading, errors } = usePhotoSearch(pageNo,debouncedSearchTerm);
  const observer = useRef();
  const lastPhotoElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNo((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div>
      <PhotosContainer>
        {photos.map((item, idx) => {
          if (photos.length === idx + 1) {
            return (
              <div ref={lastPhotoElementRef} key={idx}>
                <Card>
                  <Card.Image src={item} />
                </Card>
              </div>
            );
          } else {
            return (
              <Card key={idx}>
                <Card.Image src={item} />
              </Card>
            );
          }
        })}
      </PhotosContainer>
      <div style={{ textAlign: "center", fontSize: "2rem" }}>
        {errors && "Error"}
      </div>
      <div style={{ textAlign: "center", fontSize: "3rem", padding: "20px" }}>
        {loading && "Loading..."}
      </div>
    </div>
  );
}

export default SearchPage;
