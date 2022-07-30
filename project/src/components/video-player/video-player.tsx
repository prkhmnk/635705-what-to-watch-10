import { Film } from '../../types/film';

type VideoPlayerProps = {
  film: Film
}

function VideoPlayer({ film: { previewImage, previewVideoLink } }: VideoPlayerProps): JSX.Element {
  return (
    <video width="280" height="175" poster={previewImage} preload="metadata" muted>
      <source src={previewVideoLink} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
