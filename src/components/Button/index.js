import PropTypes from 'prop-types';
import styles from './Button.module.scss';
function Button({ handleClick, text }) {
  return (
    <button onClick={handleClick} className={styles.btn}>
      {text}
    </button>
  );
}

Button.propTypes = { handleClick: PropTypes.func, text: PropTypes.string.isRequired };

export default Button;
