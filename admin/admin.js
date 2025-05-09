document.getElementById('postForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const res = await fetch('/api/posts', {
    method: 'POST',
    body: formData
  });
  const data = await res.json();
  alert('Post created! ID: ' + data.id);
});