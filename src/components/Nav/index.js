// import PropTypes from 'prop-types';
// import navData from './navbardata';
import MenuItems from './navbardata';
import styles from './navbar.module.scss';
import Menubar from 'react-responsive-multi-level-menu';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
function Navbar() {
  const animation = ['slideIn', 'slideOut'];
  const [secondList, setSecondList] = useState(null);
  const [thirdList, setThirdList] = useState(null);
  const secondNav = (navItem, third) => {
    return (
      <div
        className={
          third
            ? ` ${styles.nav__listSecond} fullBGcontainer ${styles.nav__listThird}`
            : ` ${styles.nav__listSecond} fullBGcontainer `
        }>
        <ul className={`${styles.nav__list}`}>
          {navItem.items.slice(1).map(item => {
            return (
              <li key={uuidv4()} className={styles.nav__listItem}>
                <button
                  onClick={() => {
                    setThirdList(item);
                  }}>
                  {item.value}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  return (
    <nav className={`${styles.nav} container`}>
      <Menubar
        data={MenuItems}
        animation={animation}
        backgroundColor="#C7E3DD"
        className={`menubar ${styles.nav__mob}`}
      />
      <ul className={styles.nav__list}>
        {MenuItems.map(navItem => (
          <>
            <li key={uuidv4()} className={styles.nav__listItem}>
              <button
                onClick={() => {
                  setSecondList(navItem);
                }}>
                {navItem.value}
              </button>
            </li>
          </>
        ))}
      </ul>
      {secondList && secondNav(secondList)}
      {thirdList && secondNav(thirdList, true)}
    </nav>
  );
}

// Navbar.propTypes = {};

export default Navbar;
