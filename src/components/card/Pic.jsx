import React from 'react';
import { Link } from 'react-router-dom';
import s from './card.module.scss';
function Pic(props) {
  return (
    <>
      <li className={s.cards__item}>
        <Link className={s.cards__item__link} to={props.path}>
          <figure className={s.cards__item__pic__wrap} data-category={props.label}>
            <img className={s.cards__item__img} alt="Travel" src={props.src} />
          </figure>
          <div className={s.cards__item__info}>
            <h5 className={s.cards__item__text}>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Pic;
