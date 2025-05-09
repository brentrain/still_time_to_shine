fetch('/api/posts')
  .then(res => res.json())
  .then(data => {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = data.map(post => 
      `<h2><a href="post.html?id=${post.id}">${post.title}</a></h2>`).join('');
  });
