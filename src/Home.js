import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isLoading, error } =useFetch('http://localhost:8080/blogs');
  
    return (
        <div className="Home">
            {error && <h3>{error}</h3>}
            {isLoading && <h1 className="loading">Loading.....</h1>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}

export default Home;