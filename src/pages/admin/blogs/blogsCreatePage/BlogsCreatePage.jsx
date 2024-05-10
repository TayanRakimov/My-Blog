import React, { useState } from "react";
import { base_url } from "../../../../constants/url";

const BlogsCreatePage = () => {
  const [title, setTitle] = useState("");
  const [titleDesc, setTitleDesc] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [desc, setDesc] = useState("");

  const handleSumbit = async () => {
    const values = {
      title,
      titleDesc,
      imgUrl,
      desc,
      countComments: 0,
      createdDate: new Date(),
    };

    const url = base_url + "blogs";

    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };

    const res = await fetch(url, options);
    if (res.ok) {
      alert("Успешно добавлено");
    }
  };

  return (
    <div className="w3-container">
      <div className="w3-panel w3-card-4 w3-auto">
        <div className="w3-panel w3-indigo">
          <h1>Создание</h1>
        </div>
        <div className="w3-panel">
          <form>
            <p>
              <input
                className="w3-input"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
              <label>Title</label>
            </p>
            <p>
              <input
                className="w3-input"
                type="text"
                onChange={(e) => setTitleDesc(e.target.value)}
              />
              <label>TitleDesc</label>
            </p>
            <p>
              <input
                className="w3-input"
                type="text"
                onChange={(e) => setImgUrl(e.target.value)}
              />
              <label>ImgUrl</label>
            </p>
            <p>
              <input
                className="w3-input"
                type="text"
                onChange={(e) => setDesc(e.target.value)}
              />
              <label>Desc</label>
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

export default BlogsCreatePage;