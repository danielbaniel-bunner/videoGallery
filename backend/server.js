import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs, { readFile } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// import { getVideo } from './routes/getVideo.js';


// start server - >   node server 

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5050;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post("/upload-video", upload.single('file'), (req, res) => {
  console.log("file uploaded");
})

app.get('/videos', (req, res) => {
  const videos = fs.readdirSync('./uploads');
  res.send(videos);
});

app.get('/video/:id', function(req, res) {
  const id = req.params['id'];
  const path = `./uploads/${id}`;
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const head = {
    'Content-Length': fileSize,
    'Content-Type': 'video/mp4',
  }
  res.writeHead(200, head)
  fs.createReadStream(path).pipe(res)
})



// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:5050`);
});
