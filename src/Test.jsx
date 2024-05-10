import React from 'react';
import Tags from './components/tags';
import PopularPosts from './components/popularPosts';

const tags = true;
const data =[1];

// const Test = () => {
//     if(tags){
//         return <Tags/>
//     } else {
//         return <PopularPosts/>
//     }
// }


// const Test = () => {
//     return (
//         <div>
//             <h1>Популярные посты</h1>
//             {popularPost.length === 0 ? "NO Information" : <PopularPosts/>}
//         </div>
//     )
// } 


const Test = () => {
    return (
        <div>
            <h1>Popular Posts</h1>
            {
                data.length === 0 && <PopularPosts/>
            }
        </div>
    )
}

export default Test;



