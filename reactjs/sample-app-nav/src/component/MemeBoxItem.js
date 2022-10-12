import React, { useEffect, useState } from "react";
import axios from "axios";
import Meme from "../meme/Meme";

const apiUrl =
  "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&format=json&nojsoncallback=true&page=1&text=animal_memes";

const MemeBoxItem = () => {
  const [memeList, setMemeList] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        // console.log(response);

        const photoList = response.data.photos.photo;

        const memeList = photoList.map((item) => {
          const baseImageUrl = "https://live.staticflickr.com";
          // const imageSize = "w";
          const imageFormat = "jpg";
          const itemIndex = photoList.indexOf(item.title);

          return new Meme({
            index: itemIndex,
            title: item.title,
            baseImageUrl: `${baseImageUrl}/${item.server}/${item.id}_${item.secret}.${imageFormat}`,
          });
        });

        setMemeList(memeList);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, []);

  return (
    <div className="container mx-auto">
      <ul className="row row-cols-1 row-cols-md-4 g-4 list-unstyled">
        {memeList.map((item, index) => {
          return (
            <li key={index} className="col">
              <figure className="card h-100 border-info">
                <div className="ratio ratio-1x1">
                  <img
                    className="card-img-top"
                    src={item.baseImageUrl}
                    alt={item.title}
                    loading="lazy"
                  ></img>
                </div>
                <div className="card-body text-secondary">
                  <figcaption
                    className="card-title badge text-wrap text-break fw-normal"
                    id="title"
                  >
                    <br />
                    {item.title}
                  </figcaption>
                  {/* <span className="card-text badge text-wrap text-break fw-normal">
                    {item.title}
                  </span> */}
                </div>
                <div className="card-footer">
                  <small className="text-muted">#{index + 1}</small>
                </div>
              </figure>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MemeBoxItem;
