// import PropTypes from 'prop-types';
import styles from './FirstSection.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Adtralza from './adtralza.png';
function FirstSection() {
  return (
    <section className="container">
      <div className={`${styles.firstSection}  containerY fullBGcontainer`}>
        <div>
          <LazyLoadImage alt={'adtralza'} src={Adtralza} height={'100%'} width={'100%'} />
        </div>
        <div className={styles.firstSection__text}>
          <p>
            It is the first and only biologic developed to specifically neutralize IL-13, a key
            driver of atopic dermatitis signs and symptoms(1,2)
          </p>
          <p>Learn more about how Adtralza® works and how to use it in treatment.</p>
        </div>
      </div>
    </section>
  );
}

// FirstSection.propTypes = {};

export default FirstSection;
