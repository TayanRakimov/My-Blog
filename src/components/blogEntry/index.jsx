
import React from "react";
import { Link } from "react-router-dom";

const BlogEntry = ({ data }) => {
  const { id, imgUrl, title, titleDesc, desc, createdDate, countComments } =
    data;

  return (
    <div className="w3-card-4 w3-margin w3-white">
      <img src={imgUrl} alt="Nature" style={{ width: "100%" }} />
      <div className="w3-container">
        <h3>
          <b>{title}</b>
        </h3>
        <h5>
          {titleDesc}
          <span className="w3-opacity">{createdDate}</span>
        </h5>
      </div>

      <div className="w3-container">
        <p>{desc}</p>
        <div className="w3-row">
          <div className="w3-col m8 s12">
            <Link to={`article/${id}`}>
              <p>
                <button className="w3-button w3-padding-large w3-white w3-border">
                  <b>READ MORE »</b>
                </button>
              </p>
            </Link>
          </div>
          <div className="w3-col m4 w3-hide-small">
            <p>
              <span className="w3-padding-large w3-right">
                <b>Comments  </b>{" "}
                <span className="w3-tag">{countComments}</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEntry;
