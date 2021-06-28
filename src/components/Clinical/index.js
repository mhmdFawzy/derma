// import PropTypes from 'prop-types';
import styles from './Clinical.module.scss';
import ClinicalCard from '../ClinicalCard';
import CardOneImage from './GettyImages.png';
import CardTwoImage from './GettyImages-1.png';

function Clinical() {
  return (
    <section className="container">
      <div className={`${styles.clinical}  containerY fullBGcontainer`}>
        <h4>Clinical tools - at a glance</h4>
        <div className={styles.clinical__content}>
          <ClinicalCard
            img={CardOneImage}
            headline={'Dosing guide'}
            desc={
              'Adtralza® has a straightforward dosing regimen, with 150 mg prefilled syringes(1).'
            }
            link={'Learn more about application and dosing'}
          />
          <ClinicalCard
            img={CardTwoImage}
            headline={'Patient injection made simple'}
            desc={
              'This step by step video guide shows the patient how to self inject using the two syringes that come in the Adtralza® carton.'
            }
            link={'Watch the video'}
          />
        </div>
      </div>
    </section>
  );
}

// Clinical.propTypes = {};

export default Clinical;
