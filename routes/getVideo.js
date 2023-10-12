import fs from 'fs';
import path from 'path';

export const getVideo = (req, res) => {
    const videoPath = path.join(__dirname, '../videos/', 'IMG_0557.MOV'); // replace 'your_video_filename.mp4' with your video's filename

    fs.stat(videoPath, (err, stats) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server Error');
            return;
        }

        res.writeHead(200, {
            'Content-Length': stats.size,
            'Content-Type': 'video/mp4',
        });

        const videoStream = fs.createReadStream(videoPath);
        videoStream.pipe(res);
    });
}
