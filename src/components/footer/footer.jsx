import React from 'react';
import s from './footer.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button/button';
import './footter.css';
function footer() {
  return (
    <div className={s.footer__container}>
      <section className={s.footer__subscription}>
        <p className={s.footer__subscription__heading}>
          Join the Adventure newletter to receive our best vacation deals
        </p>
        <p className={s.footer__subscription__text}>You can unsubscribe at any time</p>

        <div className={s.input__areas}>
          <form>
            <input type="email" name="email" placeholder="Your email" className={s.footer__input} />

            <Button buttonStyle="btnOutline">Subscribe</Button>
          </form>
        </div>
      </section>

      <div className={s.footer__links}>
        <div className={s.footer__link__wrapper}>
          <div className={s.footer__link__items}>
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className={s.footer__link__items}>
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className={s.footer__link__wrapper}>
          <div className={s.footer__link__items}>
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className={s.footer__link__items}>
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className={s.social__media}>
        <div className={s.social__media__wrap}>
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              DD
              <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">DD © 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram">
              <i className="fab fa-instagram" />
            </Link>
            <Link className="social-icon-link youtube" to="/" target="_blank" aria-label="Youtube">
              <i className="fab fa-youtube" />
            </Link>
            <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
              <i className="fab fa-twitter" />
            </Link>
            <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="LinkedIn">
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default footer;
