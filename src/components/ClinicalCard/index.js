import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './ClinicalCard.module.scss';
import { Link } from 'react-router-dom';
function ClinicalCard({ img, headline, desc, link }) {
  return (
    <div className={styles.clinicalCard}>
      <div>
        <LazyLoadImage
          alt={'Website logo'}
          src={img} //
          width={'100%'}
        />
        <div className={styles.clinicalCard__content}>
          <h4>{headline}</h4>
          <p>{desc}</p>
          <Link to="/">{link}</Link>
        </div>
      </div>
    </div>
  );
}

ClinicalCard.propTypes = {
  img: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ClinicalCard;
