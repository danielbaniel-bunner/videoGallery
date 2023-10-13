import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./VideoGallery.css";
import Button from '@mui/material/Button';

// renderArrowPrev: (clickHandler: () => void, hasPrev: boolean, label: string) => React.ReactNode;
// renderArrowNext: (clickHandler: () => void, hasNext: boolean, label: string) => React.ReactNode;

            // renderArrowPrev={(clickHandler, hasNext) => {
            //     return (
            //         <Button onClick={clickHandler} variant='contained' color='error'>
            //             prev By Daniel !!
            //         </Button>
            //     )
            // }}

function VideoGallery() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('http://localhost:5050/videos');
                const data = await response.json();
                setVideos(data);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        fetchVideos();
    }, []);

    return (
      <div class= "carousel">
          <Carousel infiniteLoop showArrows useKeyboardArrows showThumbs>
            {videos.map(video => (
                <div key={video}>
                    <video width="500" height="500" controls>
                        <source src={`http://localhost:5050/video/${video}`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ))}
          </Carousel>
      </div>
    );
}

export default VideoGallery;
