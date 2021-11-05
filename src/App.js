import Navbar from "./Navbar";
import Home from "./Home";
import {Routes, Route } from "react-router";
import Create from "./Create";
import BlogDetail from "./BlogDetail";

function App() {

  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create-new" element={<Create />} />
        <Route exact path="/blogs/:id" element={<BlogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
