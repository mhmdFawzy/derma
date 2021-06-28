// import PropTypes from 'prop-types';
import '../../styles/grid.scss';
import styles from './Header.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Input from '../input/index';
import Logo from './logo.svg';
function Header() {
  return (
    <div className={`container ${styles.header}`}>
      <div>
        <LazyLoadImage
          alt={'Website logo'}
          src={Logo} //
          width={'158'}
        />
      </div>
      <Input />
    </div>
  );
}

// Header.propTypes = {};

export default Header;
