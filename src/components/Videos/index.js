// import PropTypes from 'prop-types';
import styles from './Videos.module.scss';
import VideoCard from '../VideoCard';
function Videos() {
  return (
    <section className="container">
      <div className={`${styles.videos} containerY fullBGcontainer`}>
        <h4>KOL Videos - get expert insights here</h4>
        <span>See what Key opinion leaders have to say about their experiences with Adtralza®</span>
        <div className={styles.videos__content}>
          <VideoCard
            title="Video title"
            desc="Short description of the contents or subject of the video. You can upload a screen from
          the video as thumbnail image"
          />
          <VideoCard
            title="Video title"
            desc="Short description of the contents or subject of the video. You can upload a screen from
          the video as thumbnail image"
          />
          <VideoCard
            title="Video title"
            desc="Short description of the contents or subject of the video. You can upload a screen from
          the video as thumbnail image"
          />
          <VideoCard
            title="Video title"
            desc="Short description of the contents or subject of the video. You can upload a screen from
          the video as thumbnail image"
          />
        </div>
      </div>
    </section>
  );
}

// Videos.propTypes = {};

export default Videos;
