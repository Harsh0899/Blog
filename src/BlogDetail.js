import { useParams } from "react-router"
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom';

const BlogDetail = () => {
    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch('http://localhost:8080/blogs/' + id);
    const history = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8080/blogs/' + id, {
            method: "DELETE"
        }).then(() => {
            history('/');
        })
    }

    return(
        <div className="blog-detail">
            {error && <h3>{error}</h3>}
            {isLoading && <h1 className="loading">Loading.....</h1>}
            {blog && (
                <div>
                    <h1 className="blog-heading">{blog.title}</h1>
                    <h4 className="blog-author"><i>Author: </i> {blog.author}</h4>
                    <p className="blog-body">{blog.body}</p>
                </div>
            )}
            <button onClick={handleDelete} className="del-button">Remove</button>
        </div>
    );
}

export default BlogDetail;