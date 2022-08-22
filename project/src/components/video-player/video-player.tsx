import { Film } from '../../types/film';

type VideoFilmProps = {
  film: Film,
  isMuted?: boolean,
}

function VideoPlayer({ film, isMuted = true }: VideoFilmProps): JSX.Element {
  const { videoLink, posterImage } = film;
  return (
    <video src={videoLink} className="player__video" poster={posterImage} muted={isMuted} autoPlay></video>
  );
}

export default VideoPlayer;
