var express = require('express');
var cors = require('cors');
var multer = require('multer');
require('dotenv').config();

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Multer setup
const upload = multer({ dest: 'uploads/' });

// POST endpoint for file analysis
app.post('/api/fileanalyse', upload.single('upfile'), function (req, res) {
  if (!req.file) {
    return res.json({ error: 'No file uploaded' });
  }

  res.json({
    name: req.file.originalname,   // ✅ “name” key
    type: req.file.mimetype,
    size: req.file.size
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', function () {
  console.log('Your app is listening on port ' + port);
});
