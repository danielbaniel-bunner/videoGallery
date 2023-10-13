import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Upload } from './components/Upload';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoGallery from './components/VideoGallery';

function App() {
  const [data, setData] = useState([]);

  return (
    <Router>
      <div className='app-wrapper'>
        <Navbar />
        <Routes>
          <Route path= "/" element={<VideoGallery />} exact />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
