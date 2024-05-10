import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/main/';
import ArticlePage from './pages/article';
import TestPage from './pages/test';
import BlogsCreatePage from './pages/admin/blogs/blogsCreatePage/BlogsCreatePage';
import PopularPostsPage from './pages/admin/posts/PopularPostsPage';
import TagsPage from './pages/admin/tags/TagsPage';
import PostsTablesPage from './pages/admin/tables/postsTables/postsTablesPage';


const router = createBrowserRouter([
    {
        path:"/",
        element: <MainPage/>
    },
    {
        path:"article/:id",   //localhost:3000//article/3
        element: <ArticlePage/> 
    },
    {
        path:'test',
        element: <TestPage/>
    },
    {
        path: 'admin/blogs/create',
        element: <BlogsCreatePage/>
    },
    {
        path: 'popular/posts',
        element: <PopularPostsPage/>
    },
    {
        path: 'tags',
        element: <TagsPage/>
    },
    {
        path: 'posts/tables',
        element: <PostsTablesPage/>
    }     
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router ={router}/>);



















































// "tags": [
    //     "Travel",
    //     "New York",
    //     "London",
    //     "IKEA",
    //     "NORWAY",
    //     "DIY",
    //     "Ideas",
    //     "Baby",
    //     "Family",
    //     "News",
    //     "Clothing",
    //     "Shopping",
    //     "Sports",
    //     "Games"
    //   ]


