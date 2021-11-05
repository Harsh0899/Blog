import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <div className="nav">
            <h1>Fr0ztyy's Journal</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create-new" className="newblog">New Entry</Link>
            </div>
        </div>
    );
};

export default Navbar;