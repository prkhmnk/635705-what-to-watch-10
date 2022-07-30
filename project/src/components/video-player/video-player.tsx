import { useEffect, useRef } from 'react';
import { VIDEO_TIMEOUT } from '../../const';

type VideoPlayerProps = {
  activeId: number | null,
  previewImage: string,
  previewVideoLink: string
}

function VideoPlayer({ activeId, previewImage, previewVideoLink }: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (activeId) {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, VIDEO_TIMEOUT);
    }

    videoRef.current.pause();
  }, [activeId]);

  return (
    <video ref={videoRef} poster={previewImage} preload="metadata" muted>
      <source src={previewVideoLink} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
