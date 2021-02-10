import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsLoading(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
            //json server adds the id propery
        }).then(() => {
            console.log('new blog added');
            setIsLoading(false);
            // history.go(-1);
            history.push('/');
        })

        
        // console.log(blog);

    }

    return ( 
        <div className="create">
            <h2>Add a New Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isLoading && <button>Add Blog Post</button>}
                {isLoading && <button disabled>Adding Blog Post</button>}
                {/* <p>{ title }</p> */}
                {/* <p>{ body }</p> */}
                {/* <p>{ author }</p> */}
            </form>
        </div>
     );
}
 
export default Create;