const express = require('express');
const fs = require('fs');
const multer = require('multer');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

const upload = multer({ dest: 'public/uploads/' });

app.get('/api/posts', (req, res) => {
  const files = fs.readdirSync('./posts');
  const posts = files.map(f => JSON.parse(fs.readFileSync('./posts/' + f)));
  res.json(posts);
});

app.get('/api/post/:id', (req, res) => {
  const file = `./posts/${req.params.id}.json`;
  if (fs.existsSync(file)) {
    res.json(JSON.parse(fs.readFileSync(file)));
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

app.post('/api/posts', upload.single('image'), (req, res) => {
  const { title, content } = req.body;
  const id = Date.now();
  const post = {
    id,
    title,
    date: new Date().toISOString(),
    content,
    image: req.file ? `/uploads/${req.file.filename}` : null
  };
  fs.writeFileSync(`./posts/${id}.json`, JSON.stringify(post, null, 2));
  res.status(201).json({ success: true, id });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
