const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json({limit : '50mb'}));
app.use(express.urlencoded({extended : false, limit: '50mb'}));

const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

const upload = multer({ storage: storage })

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.post('/api/uploads', upload.single('file'), async (req, res) => {

  res.json(req.file)

} )

// app.get('/api/uploads/:path', async (req, res) => {

//   res.json()

// } )

app.listen(8083, () => {
    console.log(`running on port ${8083}`)
});