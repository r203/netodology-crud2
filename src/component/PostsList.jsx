import { Link } from "react-router-dom";

const PostsList = ({ posts }) => {

  return (
    <ul>
      {posts.map(post => {
        return (
          <li key={post.id.toString()}>
            <Link to={`/posts/${post.id}`}>
            <div>
              [AVATAR]
            </div>
            <div>
              [TITLE]
            </div>
            <div>
              {post.content}
            </div>

            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default PostsList;