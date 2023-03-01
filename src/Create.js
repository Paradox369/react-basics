import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("paradox");

  return (
    <div className="create">
      <h2>add new blog</h2>
      <form>
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

        <button>add</button>

        <p>{author} </p>
        <p>{title} </p>
        <p>{body} </p>
      </form>
    </div>
  );
};

export default Create;
