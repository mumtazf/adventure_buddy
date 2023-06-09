import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.data);
    }, [props]);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} name={post.name} speed={post.speed} candy={post.candy}/>
                ) : <h2>{'No Crewmates Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;