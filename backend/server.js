const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '_'));
  }
});
const upload = multer({ storage: storage });

// Upload endpoint
app.post('/upload', upload.single('song'), (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded.');
  res.json({ url: `/uploads/${req.file.filename}`, title: req.body.title || req.file.originalname });
});

// List all uploaded songs
app.get('/songs', (req, res) => {
  fs.readdir('uploads', (err, files) => {
    if (err) return res.json([]);
    const songFiles = files.filter(f => /\.(webm|mp3|wav|ogg)$/i.test(f));
    res.json(songFiles.map(f => ({
      title: f.split('-').slice(1).join('-'), // Remove timestamp from display
      url: `/uploads/${f}`
    })));
  });
});

// Ensure uploads directory exists
if (!fs.existsSync('uploads')) fs.mkdirSync('uploads');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
