import { useState, useEffect } from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [ blogs , setBlogs ] = useState(null);

    const [name, setName] = useState('mario');
    
    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        // console.log('use effect ran');
        // console.log(blogs);
        // console.log(name);
        // simulate loading taking 1 second for test
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    // console.log(res);
                    if(!res.ok) {
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then((data) => {
                    // console.log(data);
                    setBlogs(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    // console.log(err.message);
                    setIsLoading(false);
                    setError(err.message);

                })

        }, 1000);



        // use an empty dependency array [] to only run the function once on the first render
    }, []);

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