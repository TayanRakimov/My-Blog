import React, {useState, useEffect} from "react";
import { base_url } from "../../../../constants/url";
import { getData } from "../../../../api/actions";


const PostsTablesPage = () => {
  const [title, setTitle] = useState("");
  const [titleDesc, setTitleDesc] = useState("");
  const [desc, setDesc] = useState("");
  const [createdDate, setCreatedDate] = useState("");

  const handleSumbit = async () => {
    const values = {
      title,
      titleDesc,
      desc,
      createdDate,
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
      alert("Успешно удалено");
    }
  };
   
        return (
          
                    <div>
                        <div className="w3-container">
                        <table class="w3-table-all w3-card-4">
                               <tr>
                                       
                                        <th>title: {title}</th>
                                        <th>titleDesc: {titleDesc}</th>
                                        <th>createdDate: {createdDate}</th>
                                        <th>desc: {desc}</th>
                                        <button 
                                        type="button"
                                        onClick={dalete} class="w3-button w3-red">Dalete</button>
                                    </tr>
                            </table>
                        </div>
                    </div>
                 
        );
      };
    
export default PostsTablesPage;



   // const data = {1:[
    //     {
    //     id: "1",
    //     title: "TITLE HEADING",
    //     titleDesc: "Title description,",
    //     createdDate: "April 7, 2014",
    //     desc: "Mauris neque quam",
    //   },
    //   {
    //     id: "2",     
    //     title: "BLOG ENTRY",
    //     titleDesc: "Title description,",
    //     createdDate: "April 7, 2014",
    //     desc: "Mauris neque quam, fermentum ut nisl vitae",
    //   },]}


