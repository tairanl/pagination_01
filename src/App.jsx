import "./App.css";
import Pagination from "./components/Pagination";
import Posts from "./components/Posts";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // console.log("res", res);
        setPosts(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  // change page //子组件可以通过调用这个父级的函数来改变父级的state
  const paginate = (currentNumber) => {
    setCurrentPage(currentNumber);
  };

  // get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - 10;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container">
      <h3>My Blog </h3>
      {/* Post部分负责展示当前页的posts，并且在读取过程显示loading... */}
      <Posts currentPosts={currentPosts} loading={loading} />
      {/* 传给页码器,页码器需要计算一共多少页，所以需要知道一共几个item，每页能存放几个item;还需要确认当前页面，和点击事件更新页面 */}
      <Pagination
        postsLength={posts.length}
        postPerPage={postPerPage}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
