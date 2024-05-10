export const getData = async (url) => {
    const response = await fetch(url);
    if(response.ok){
        const blogs = await response.json();
        return blogs;
    } else {
        throw new Error ("Произошла ошибка при загрузке данных");
    }
 };
