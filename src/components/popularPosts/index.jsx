import React, {useState, useEffect}  from 'react';
import { getData } from '../../api/actions';
import { base_url } from '../../constants/url';


const PostItem = ({imgUrl, title, desc}) => {
  return (
  <li className="w3-padding-16">
        <img 
        src={imgUrl} 
        alt="Image" 
        className="w3-left w3-margin-right" 
        style={{ width: "50px" }}/>
        <span className="w3-large">{title}</span>
        <br/>
        <span>{desc}</span>
      </li>
  )
}


const PopularPosts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
        try {
            const url = base_url + "popularPosts";
            const popularPosts = await getData(url);
            setData(popularPosts);
        } catch (e) {
            alert(e);
        }
    }
    fetchData();
 }, []);
    return (
       <>
       <div className="w3-card w3-margin">
    <div className="w3-container w3-padding">
      <h4>Popular Posts</h4>
    </div>
    <ul className="w3-ul w3-hoverable w3-white">
      {
        data.map((item, index) => {
          return <PostItem 
          key={index}
          imgUrl={item.imgUrl} 
          title={item.title}
          desc={item.desc}
          />
        }
     )}
    </ul>
  </div>
  </>
    );
}

export default PopularPosts;
