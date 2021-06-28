import { lazy, Suspense } from 'react';
// import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Nav from '../../components/Nav';

// const Nav = lazy(() => import('../../components/Nav'));

const Hero = lazy(() => import('../../components/Hero'));
const FirstSection = lazy(() => import('../../components/FirstSection'));
const Services = lazy(() => import('../../components/Services'));
const ThirdSection = lazy(() => import('../../components/ThirdSection'));
const Clinical = lazy(() => import('../../components/Clinical'));
const Videos = lazy(() => import('../../components/Videos'));
const Refrence = lazy(() => import('../../components/Refrence'));
const Footer = lazy(() => import('../../components/Footer'));

function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <main>
          <FirstSection />
          <Services />
          <ThirdSection />
          <Clinical />
          <Videos />
          <Refrence />
          <Footer />
        </main>
      </Suspense>
    </>
  );
}

Home.propTypes = {};

export default Home;
