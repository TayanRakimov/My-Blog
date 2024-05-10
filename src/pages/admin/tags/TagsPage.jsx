import React, { useState } from "react";
import { base_url } from "../../../constants/url";


const TagsPage = () => {
    const [Tags, setTags] = useState (' ');

    const handleSumbit = async () => {
        const value = {
          Tags,
        };
    
        const url = base_url + 'tags';
         
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
      }
  
  return (
    <div className="w3-container">
      <div className="w3-panel w3-card-4 w3-auto">
        <div className="w3-panel">
         <h1>Создание Тегов</h1> 
        </div>
          <div className="w3-panel">
            <form className="w3-container">
              <p>
                <input className="w3-input" type="text" onChange={(e) => setTags(e.target.value)}/>
                <label>Tags</label>
              </p>
              <p>
              <button onClick={handleSumbit}
                
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

export default TagsPage;