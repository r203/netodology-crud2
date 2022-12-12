import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postsAPI } from '../API/api'
import PostsList from "./PostsList";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await postsAPI.getPosts();
      setPosts(data)
    }

    fetchData();
  }, [])

  return (
    <>
      <Link to='/posts/new' className="btn"  >New post</Link>
      <PostsList posts={posts} />
    </>
  )
}

export default Posts;