// import PropTypes from 'prop-types';
import styles from './Refrence.module.scss';
import Arrow from './arrow.svg';
function Refrence() {
  return (
    <div className="container">
      <div className={`${styles.refrence}  fullBGcontainer`}>
        <img src={Arrow} alt="Refrence" width="35vw" height="35vw" />
        <h4>References</h4>
      </div>
    </div>
  );
}

// Refrence.propTypes = {};

export default Refrence;
