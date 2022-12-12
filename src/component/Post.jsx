import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { postsAPI } from '../API/api';

const Post = () => {
  const [post, setPost] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [content, setContent] = useState();
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async (postId) => {
      const data = await postsAPI.getPost(postId);
      setPost(data);
    }

    fetchData(postId);
  }, [postId])

  const handleRemovePost = async (post) => {
    await postsAPI.removePost(post);
    navigate('/');
  }

  const onContentChange = (e) => {
    setContent(e.currentTarget.value);
  }

  const onContentEdit = (post) => {
    setEditMode(true)
    setContent(post.content)
    // console.log(post);
  }

  const onContentSave = async (post) => {
    const editedPost = { id: post.id, content: content };
    setPost(editedPost)
    await postsAPI.editPost(editedPost);
    setEditMode(false)
  }

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="btn">Назад</button>

      {/* {post.content} */}

      {!editMode
        ? <span >{post.content}</span>
        : <input autoFocus={true} onChange={onContentChange} value={content}></input>
      }

      {!editMode
        ? <button
          onClick={() => onContentEdit(post)}
          className="btn">Отредактировать</button>
        : <button
          onClick={() => onContentSave(post)}
          className="btn">Сохранить</button>
      }


      <button
        onClick={() => handleRemovePost(post.id)}
        className="btn">Удалить</button>
    </>
  )
}

export default Post;