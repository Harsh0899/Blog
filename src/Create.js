import { useState } from "react";

const Create= () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Froztyy');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setTitle('');
        setBody('');
        setAuthor('Froztyy');
        setIsPending(true);
        fetch('http://localhost:8080/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
        });
    }

    return (
        <div className="create">
            <h1>Create New Blog</h1>
            <form onSubmit={handleSubmit}>
                <label><h2>Blog Title:</h2></label>
                <input
                    required 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label><h2>Blog Body:</h2></label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label><h2>Author:</h2></label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Froztyy">Froztyy</option>
                    <option value="HYA">HYA</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding...</button>}
            </form>
        </div>
    );
}

export default Create;