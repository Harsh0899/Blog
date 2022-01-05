import { Link } from "react-router-dom";

const BlogList= (props) =>{
    const Blogs= props.blogs;
    
    return (
        <div className="blog-cont">
            { Blogs.map((blog) => (
                <Link to={`/blogs/${blog.id}`} className="blog-tile" key={blog.id}>
                    <h1>{blog.title}</h1>
                    <h3>{blog.body.slice(0,50)+"..."}</h3>
                    <h5>{blog.author}</h5>
                </Link>
            )) }
        </div>
    )
}

export default BlogList;