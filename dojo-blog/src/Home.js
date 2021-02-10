// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {/* conditional templating. first it's null so it checks first if true, just waits && move to right side, evaluate, output values from json */}
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading ... </div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Mario's Blogs!" />       */}
            {/* <button onClick={() => setName('luigi')}>change name</button> */}
            {/* <p>{ name }</p> */}
        </div>
     );
}
 
export default Home;