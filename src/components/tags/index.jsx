
import React, { useState, useEffect } from "react";
import { base_url } from "../../constants/url";
import { getData } from "../../api/actions";

const Tags = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = base_url + "tags";
        const tags = await getData(url);
        setData(tags);
      } catch (e) {
        alert(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w3-card w3-margin">
      <div className="w3-container w3-padding">
        <h4>Tags</h4>
      </div>
      <div className="w3-container w3-white">
        <p>
          {data.map((tag, index) => {
            return (
              <span
                key={index}
                className="w3-tag w3-light-grey w3-small w3-margin-bottom"
              >
                {tag}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default Tags;
