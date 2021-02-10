const BlogList = ({blogs, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;

    // console.log(props,blogs);

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                // always need to have key which is usually id
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>By { blog.author }</p>
                </div>
            ))}  
        </div>
     );
}
 
export default BlogList;