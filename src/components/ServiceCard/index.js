import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './services.module.scss';
import { Link } from 'react-router-dom';

function Service({ img, title, desc, link }) {
  return (
    <div className={styles.serviceCard}>
      <div>
        <LazyLoadImage
          alt={'service name'}
          src={img} //
          width={'192'}
        />
      </div>
      <div className={styles.serviceCard__text}>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
      <div className={styles.serviceCard__link}>
        <Link to="/">{link}</Link>
      </div>
    </div>
  );
}

Service.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Service;
