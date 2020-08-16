import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import style from './navi.module.scss';
import { Button } from '../button/button';
import './iconStyle.css';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Products from '../pages/Products';
import SignUp from '../pages/SignUp';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <div>
      <Router>
        <nav className={style.navbar}>
          <div className={style.navbar__container}>
            <Link to="/" className={style.navbar__logo} onClick={closeMobileMenu}>
              DD <i className={`${style.fa__typo3} fab fa-typo3`}></i>
            </Link>

            <div className={style.menu__icon} onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
          </div>

          <ul className={click ? 'navMenuActive' : 'navMenu'}>
            <li className={style.nav__items}>
              <Link to="/" className={style.nav__links} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className={style.nav__items}>
              <Link to="/services" className={style.nav__links} onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className={style.nav__items}>
              <Link to="/products" className={style.nav__links} onClick={closeMobileMenu}>
                Product
              </Link>
            </li>
            <li className={style.nav__items}>
              <Link to="sign-up" className={style.nav__links__mobile} onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>

          {button && <Button buttonStyle={style.btn__outline}>SIGH UP</Button>}
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default Navbar;
