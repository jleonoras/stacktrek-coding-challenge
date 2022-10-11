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

          return new Meme({
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
      <ul className="row row-cols-1 row-cols-md-4 g-4">
        {memeList.map((item, index) => {
          return (
            <li key={index} className="col">
              <figure className="border rounded">
                <div className="ratio ratio-1x1">
                  <img
                    className="card-img-top img-fluid"
                    src={item.baseImageUrl}
                    alt={item.title}
                  ></img>
                </div>
                <div className="card-body">
                  {/* <figcaption className="card-title">{item.title}</figcaption> */}
                  <span className="card-text badge text-wrap text-break fw-normal">
                    {item.title}
                  </span>
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
