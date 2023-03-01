import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isLoading && <div>loading...</div>}
      {error && <div> {error} </div>}
      {data && <BlogList blogs={data} title="all blogs!" />}
    </div>
  );
};

export default Home;
