import React, { useState, useEffect } from "react";
import { base_url } from "../../../../constants/url";

const PostsTablePage = () => {
    const [popularPosts, setPopularPosts] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedTable, setSelectedTable] = useState('posts');
    
    const fetchData = async (dataType) => {
        try {
            const url = base_url + dataType;
            const res = await fetch(url);
            const data = await res.json();
            if (dataType === 'popularPosts') {
                setPopularPosts(data || []);
            } else if (dataType === 'tags') {
                setTags(data || []);
            }
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
      fetchData('popularPosts');
      fetchData('tags');

      
  }, []);

    const handleDeleteData = async (dataType, dataId) => {
      try {
          const url = base_url + `${dataType}/${dataId}`;
          const res = await fetch(url, {
              method: 'DELETE'
          });
          if (res.ok) {
              alert("Успешно удалено");
              if (dataType === 'posts') {
                  const updatedData = popularPosts.filter(post => post.id !== dataId);
                  setPopularPosts(updatedData);
              } else if (dataType === 'tags') {
                  const updatedData = tags.filter(tag => tag.id !== dataId);
                  setTags(updatedData);
              }
          } else {
              console.error('Ошибка удаления данных');
          }
      } catch (error) {
          console.error(error);
      }
  };

  return (
      <div className="w3-container">
          <input type="text" value={selectedTable} onChange={(e) => setSelectedTable(e.target.value)} placeholder="Введите название таблицы (posts, tags, popularPosts)" />
          
          {selectedTable === 'posts' && (
              <div className="w3-panel w3-card-4 w3-auto">
                  <div className="w3-indigo w3-panel">
                      <h1>Posts</h1>
                  </div>
                  <div className="w3-panel">
                      <table>
                          <thead>
                              <tr>
                                  <th>ID</th>
                                  <th>Title</th>
                                  <th>TitleDesc</th>
                                  <th>Create Date</th>
                              </tr>
                          </thead>
                          <tbody>
                              {popularPosts.map(post => (
                                  <tr key={post.id}>
                                      <td>{post.id}</td>
                                      <td>{post.title}</td>
                                      <td>{post.titleDesc}</td>
                                      <td>{post.createDate}</td>
                                      <td>
                                          <button onClick={() => handleDeleteData('posts', post.id)}>Удалить</button>
                                      </td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </div>
          )}
          {selectedTable === 'popularPosts' && (
              <div className="w3-panel w3-card-4 w3-auto">
                  <div className="w3-indigo w3-panel">
                      <h1>Popular Posts</h1>
                  </div>
                  <div className="w3-panel">
                      <table>
                          <thead>
                              <tr>
                                  <th>ID</th>
                                  <th>Title</th>
                                  <th>TitleDesc</th>
                              </tr>
                          </thead>
                          <tbody>
                              {popularPosts.map(post => (
                                  <tr key={post.id}>
                                      <td>{post.id}</td>
                                      <td>{post.title}</td>
                                      <td>
                                          <button onClick={() => handleDeleteData('popularPosts', post.id)}>Удалить</button>
                                       </td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </div>
          )}
          {selectedTable === 'tags' && (
              <div className="w3-panel w3-card-4 w3-auto">
                  <div className="w3-indigo w3-panel">
                      <h1>Tags</h1>
                  </div>
                  <div className="w3-panel">
                      <table>
                          <thead>
                              <tr>
                                  <th>ID</th>
                                  <th>Name</th>
                              </tr>
                          </thead>
                          <tbody>
                              {tags.map(tag => (
                                  <tr key={tag.id}>
                                      <td>{tag.id}</td>
                                      <td>{tag.name}</td>
                                      <td>
                                       <button onClick={() => handleDeleteData('tags', tag.id)}>Удалить</button>
                                       </td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </div>
          )}
      </div>
  );
};


export default PostsTablePage;