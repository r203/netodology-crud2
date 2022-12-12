import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { postsAPI } from '../API/api'

const NewPost = () => {
  const [form, setForm] = useState({
    post: ""
  })
  const navigate = useNavigate();

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }))
  }

  const handleAddPost = (event) => {
    event.preventDefault();
    const newPost = { id: 0, content: form.post };
    postData(newPost);
    setForm({ post: "" });
    navigate('/');
  }

  const postData = async (post) => {
    await postsAPI.addPost(post);
  }

  return (
    <>
      <Link to='/' className="btn">Close</Link>

      <form onSubmit={handleAddPost}>
        <div>
          <label 
            forhtml="post">Введите текст поста</label>
            <br></br>
          <input 
            type="text" 
            id="post" 
            name="post" 
            value={form.post} 
            onChange={handleFormChange} 
            required />
        </div>

        <button className='btn'>Опубликовать</button>
      </form>
    </>
  )
}

export default NewPost;