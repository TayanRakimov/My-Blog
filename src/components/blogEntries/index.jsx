
import React, { useEffect, useState } from "react";
import BlogEntry from "../blogEntry";
import { base_url } from "../../constants/url";
import { getData } from "../../api/actions";

const BlogEntries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = base_url + "blogs";
        const posts = await getData(url);
        setData(posts);
      } catch (e) {
        alert(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w3-col l8 s12">
      {data.map((item, index) => (
        <BlogEntry key={index} data={item} />
      ))}
    </div>
  );
};

export default BlogEntries;
