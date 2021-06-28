// import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './Hero.module.scss';
import HeroLogo from './heroLogo.svg';
function Hero() {
  return (
    <div className={`${styles.hero} container`}>
      <div className={styles.hero__text}>
        <div>
          <LazyLoadImage
            alt={'Website logo'}
            src={HeroLogo} //
            width={'122'}
          />
        </div>
        Adtralza® is a new treatment for adult patients with moderate-to-severe atopic dermatitis
        (eczema) who are candidates for systemic therapy.
      </div>
    </div>
  );
}

// Hero.propTypes = {};

export default Hero;
