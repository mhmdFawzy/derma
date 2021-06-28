// import PropTypes from 'prop-types';
import styles from './Services.module.scss';
import Service from '../ServiceCard';
import NumberService from './number.svg';
import Improve from './improve.svg';
import Safety from './safety.svg';
function SecondSection() {
  return (
    <section className="container">
      <div className={`${styles.SecondSection}  containerY fullBGcontainer`}>
        <Service
          img={NumberService}
          title="Long term sustained improvement"
          desc="9 out of 10 respondents experienced sustained disease control in clinical trials 10, providing sustained improvements in the burden of disease(1,2, 1, 8*†‡)."
          link="See efficacy and trial data"
        />
        <Service
          img={Improve}
          title="Improvements in the burden of disease"
          desc="Patients in clinical trials saw an improvement in Quality of Life with early symptom relief and sustained improvements in burden of disease from week 16 to 32(12,13)."
          link="Learn more about quality of life improvements"
        />
        <Service
          img={Safety}
          title="Good safety profile"
          desc="The overall frequency and severity of adverse events with Adtralza® were comparable to placebo at 16 weeks* and 52 weeks(19)."
          link="See safety profile"
        />
      </div>
    </section>
  );
}

// SecondSection.propTypes = {};

export default SecondSection;
