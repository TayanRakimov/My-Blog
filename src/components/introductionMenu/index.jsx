import React from 'react';
import AboutCard from '../aboutCard';
import PopularPosts from '../popularPosts';
import Tags from '../tags';


const IntroductionMenu = () => {
    return (
        <div className="w3-col l4" >
            <AboutCard/>
            <PopularPosts/>
            <Tags />
            
        </div>
    );
}

export default IntroductionMenu;
