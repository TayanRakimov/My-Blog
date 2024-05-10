
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./index.module.css";
import { base_url } from "../../constants/url";
import { getData } from "../../api/actions";

const ArticlePage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const url = base_url + "blogs/" + id;
        const post = await getData(url);
        setData(post);
      } catch (e) {
        alert(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={`${classes.center}`}>
      <div style={{ width: "70%" }} className={`w3-card-4 w3-margin w3-white`}>
        <img src={data.imgUrl} alt="Nature" style={{ width: "100%" }} />
        <div className="w3-container">
          <h3>
            <b>{data.title}</b>
          </h3>
          <h5>
            {data.titleDesc}
            <span className="w3-opacity">{data.createdDate}</span>
          </h5>
        </div>

        <div className="w3-container">
          <p>{data.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
