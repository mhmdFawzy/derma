// import PropTypes from 'prop-types';
import styles from './ThirdSection.module.scss';
import Button from '../Button';
import { useEffect, useRef } from 'react';
import Thumbnail from './videoThumbnail.svg';
function ThirdSection() {
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
    <section className="container">
      <div className={`${styles.thirdSection}  containerY fullBGcontainer`}>
        <div className={styles.thirdSection__text}>
          <h4>
            Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs and symptoms.
          </h4>
          <p>
            By specifically targeting the IL-13 cytokine, Adtralza® inhibits the interaction with
            type II receptors and prevents IL-13-induced inflammatory responses in the skin(1,2).
            <p>Adtralza® selectively modulates the dysregulated immune system by(1):</p>
            <ul>
              <li>— Reducing markers of skin inflammation</li>
              <li>— Improving markers of skin barrier integrity</li>
              <li>— Reducing epidermal thickness</li>
            </ul>
          </p>
          <div className={styles.thirdSection__btn}>
            <Button text={'Watch the video'} />
          </div>
          <div className={styles.thirdSection__duration}>Duration: 2:43</div>
        </div>
        <div className={styles.thirdSection__video}>
          <video height={'100%'} width={'100%'} preload="none" ref={videoRef} poster={Thumbnail}>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.5" type="video/mp4" />
            <source src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.5" type="video/ogg" />
            <track kind="captions" />
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
    </section>
  );
}

// ThirdSection.propTypes = {};

export default ThirdSection;
