import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7777',
});

export const postsAPI = {
  getPosts () {
    return instance.get(`/posts`,)
      .then(response => response.data)
  },

  getPost (postId) {
    return instance.get(`/posts`,)
      .then(response => response.data)
      .then(posts => posts.find(o => {
        return o.id === +postId
      }))

  },

  addPost (post) {
    return instance.post(`/posts`, post)
    .then(response => response.data)
  },

  editPost (post) {
    // console.log(post);
    return instance.post(`/posts`, post)
    .then(response => response.data)
  },

  removePost (postId) {
    return instance.delete(`/posts/${postId}`)
    .then(response => response.data)
  },
}