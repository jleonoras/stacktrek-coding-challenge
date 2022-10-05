import React, { useEffect, useState } from "react";
import axios from "axios";

const apiUrl =
  "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&format=json&nojsoncallback=true&page=1&text=animal_memes";

const MemeListPage = () => {
  const [memeList, setMemeList] = useState(["Loading..."]);
  const [memeImage, setMemeImage] = useState(["Loading..."]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response);

        const jsonObject = response.data;
        const photoList = jsonObject.photos.photo;

        const memeList = photoList.map((item) => {
          return item.title;
        });

        const memeImage = photoList.map((itemImage) => {
          const imageUrl = "https://live.staticflickr.com";
          // const imgSize = "w";
          const imageFormat = "jpg";

          return `${imageUrl}/${itemImage.server}/${itemImage.id}_${itemImage.secret}.${imageFormat}`;
        });

        setMemeList(memeList);
        setMemeImage(memeImage);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memes</h1>
        <p>This is the Memes page</p>
        <ul>
          {memeList.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
          {memeImage.map((itemImage, index) => {
            return (
              <li key={index}>
                <a href={itemImage} target="_blank" rel="noreferrer">
                  <img src={itemImage} alt={itemImage.title}></img>
                </a>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
};

export default MemeListPage;

// class MemeListPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: memeList(),
//       image: memeImage(),
//     };
//   }
//   render() {
//     return <div>MemeListPage</div>;
//   }
// }
