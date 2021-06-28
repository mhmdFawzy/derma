import PropTypes from 'prop-types';
import styles from './VideoCard.module.scss';
import Thumbnail from './videoThumbnail.svg';
import { useEffect, useRef } from 'react';

function VideoCard({ title, desc }) {
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.addEventListener(
      'click',
      function () {
        videoRef.current.play();
        videoRef.current.controls = 'controls';
      },
      false
    );
  }, []);
  return (
    <div className={styles.videoCard}>
      <video ref={videoRef} height={'100%'} width={'100%'} preload="none" poster={Thumbnail}>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.5" type="video/mp4" />
        <source src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.5" type="video/ogg" />
        <track kind="captions" />
        Your browser does not support HTML video.
      </video>
      <div className={styles.videoCard__text}>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

VideoCard.propTypes = { title: PropTypes.string.isRequired, desc: PropTypes.string.isRequired };

export default VideoCard;
