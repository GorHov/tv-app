import type { VideoType } from "../../types/VideoType";
import "./Video.scss";

interface FeaturedVideoProps {
  video: VideoType;
  isVideoPlaying: boolean;
}

const Video = ({ video, isVideoPlaying }: FeaturedVideoProps) => {

  const extractYear = (dateString: string): string => {
    return new Date(dateString).getFullYear().toString();
  };

  return (
    <div className="container">
      {isVideoPlaying && video?.VideoUrl ? (
        <video className="media" src={video.VideoUrl} autoPlay muted loop />
      ) : (
        <img
          src={`assets/${video.CoverImage}`}
          alt={video.Title}
          className="media"
        />
      )}

      <div className="overlay">
        <div className="category">{video?.Category}</div>

        <div className="title-image">
          <img src={`assets/${video?.TitleImage}`} alt={video?.Title} />
        </div>

        <div className="info">
          <span>{extractYear(video?.ReleaseYear)}</span>
          <span>{video?.MpaRating}</span>
        </div>

        <p className="description">{video?.Description}</p>

        <div className="buttons">
          <button className="play">▶ Play</button>
          <button className="info-btn">ℹ More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Video;
