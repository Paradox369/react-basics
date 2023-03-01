import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("paradox");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author };

    setIsPending(true);
    fetch(`http://localhost:8000/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("blogadded");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>add new blog</h2>

      <form onSubmit={handleSubmit}>
        <label>blog title: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>blog body: </label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>blog author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="paradox">paradox</option>
          <option value="george">george</option>
        </select>

        {!isPending && <button>add</button>}
        {isPending && <button disabled>adding...</button>}
      </form>
    </div>
  );
};

export default Create;
