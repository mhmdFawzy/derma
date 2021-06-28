// import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './Footer.module.scss';
import FooterLogo from './footerLogo.svg';
function Footer() {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.footer__content}>
        <div>
          <LazyLoadImage alt={'footer logo'} src={FooterLogo} height={'100%'} width={'100%'} />
        </div>
        <div>
          <ul>
            <li>© Copyright LEO Pharma 2020 of LEO Pharma</li>
            <li>LEO and the LEO Lion Design</li>
            <li>are registered trademarks</li>
            <li>All rights reserved</li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__links}>
        <ul>
          <li>Contact</li>
          <li>Imprint</li>
          <li>Conditions</li>
          <li>Terms of use</li>
          <li>Privacy</li>
          <li> Cookie content</li>
        </ul>
        <span>LEO Pharma corporate website</span>
      </div>
    </footer>
  );
}

// Footer.propTypes = {};

export default Footer;
