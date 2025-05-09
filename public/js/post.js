const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch(`/api/post/${id}`)
  .then(res => res.json())
  .then(post => {
    document.getElementById('post').innerHTML = `
      <h1>${post.title}</h1>
      <p>${post.date}</p>
      ${post.image ? `<img src="${post.image}" width="300">` : ''}
      <p>${post.content}</p>`;
  });
