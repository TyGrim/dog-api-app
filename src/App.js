// import React from "react"; //imported react with useState
import React, { useState } from "react";
import "./App.scss";

//setup clickhander / set and track count/totalcount
// get/add images (fetch/push in [])
// set/display images (url)
// if count is negative remove images from end (pop or slice)
// show loading until image populates

function ImageBox({ imageUrl }) {
  console.log(imageUrl);
  return (
    <div className="ImageBox">
      <img src={imageUrl} alt="Dog" />
    </div>
  );
}

function App() {
  const [imageUrls, setImageUrls] = useState([]);

  async function clickHandler(count) {
    let totalCount = count < 0 ? count * -1 : count;
    const newImageUrls = [...imageUrls];
    let baseUrl = "https://dog.ceo/api/breeds/image/random";
    if (count === 5) {
      baseUrl += "/5";
    }
    if (count > 0) {
      const result = await fetch(baseUrl);
      const returnVal = await result.json();
      const dogUrls = returnVal.message;

      if (Array.isArray(dogUrls)) {
        dogUrls.forEach((url) => newImageUrls.push(url));
      } else {
        newImageUrls.push(dogUrls);
      }
    }

    if (count < 0) {
      for (let i = 0; i < totalCount; i++) {
        newImageUrls.pop();
      }
    }
    setImageUrls(newImageUrls);
  }

  return (
    <div className="App">
      <section className="Controls">
        <h1>Who let the Dogs out?</h1>
        <form>
          <button type="button" onClick={() => clickHandler(1)}>
            +1
          </button>
          <button type="button" onClick={() => clickHandler(5)}>
            +5
          </button>
          <button type="button" onClick={() => clickHandler(-1)}>
            -1
          </button>
          <button type="button" onClick={() => clickHandler(-5)}>
            -5
          </button>
        </form>
      </section>
      <section className="Gallery">
        {imageUrls.map((imageUrl, i) => (
          <ImageBox key={i} imageUrl={imageUrl} />
        ))}
      </section>
    </div>
  );
}

export default App;
