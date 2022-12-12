import './App.css';
import { Routes, Route } from 'react-router-dom';
import Posts from './component/Posts';
import NewPost from './component/NewPost';
import Post from './component/Post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Posts />} />
        <Route path="/posts/new" exact element={<NewPost />} />
        <Route path="/posts/:postId" exact element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
