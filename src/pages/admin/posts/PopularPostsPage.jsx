import React, { useState } from "react";
import { base_url } from "../../../constants/url";


const PopularPostsPage = () => {
  const [ImgUrl, setImgUrl] = useState(' ');
  const [title, setTitle] = useState(' ');
  const [desc, setdesc] = useState(' ');


  const handleSumbit = async () => {
    const value = {
      ImgUrl,
      title,
      desc,
    };

    const url = base_url + 'popularPosts';
     
    const options = {
      method: 'post',
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(value),
    };

    const res = await fetch(url, options);
    if (res.ok) {
      alert("Успешно добавлено");
    }

    console.log((ImgUrl));
    console.log((title));
    console.log((desc));
  }

  return (
    <div className="w3-container">
      <div className="w3-panel w3-card-4 w3-auto">
        <div className="w3-panel">
         <h1>Создание Популярных постов</h1> 
        </div>
          <div className="w3-panel">
            <form className="w3-container">
              <p>
                <input className="w3-input" type="text" onChange={(e) => setImgUrl(e.target.value)} />
                <label>ImgUrl</label>
              </p>
              <p>
                <input className="w3-input" type="text" onChange={(e) => setTitle(e.target.value)}/>
                <label>Title</label>
              </p>
              <p>
                <input className="w3-input" type="text" onChange={(e) => setdesc(e.target.value)}/>
                <label>desc</label>
              </p>
              <p>
              <button 
              type="button"
              onClick={handleSumbit}
                
                className="w3-button w3-block w3-teal"
              >
                Создать
              </button>
            </p>
            </form>
          </div>
      </div>
    </div>
  );
};


export default PopularPostsPage;


