import Video from '../components/Video/Video';
import '../styles/Home.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import Slider from '../components/Slider/Slider';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../hooks/reduxHooks';

const Home = () => {
  const featured = useAppSelector((state) => state.videos.featured);
  const videos = useAppSelector((state) => state.videos.videos);

  const [playVideo, setPlayVideo] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlayVideo(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [featured]);

  return (
    <div className="home-container">
      <div className="home-sidebar">
        <Sidebar />
      </div>

      <div className="home-main">
        {featured && (
          <Video
            video={featured}
            isVideoPlaying={playVideo}
          />
        )}
        <Slider items={videos} setPlayVideo={setPlayVideo}/>
      </div>
    </div>
  );
};

export default Home;
