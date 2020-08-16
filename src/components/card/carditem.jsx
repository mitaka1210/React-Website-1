import React from 'react';
import { Link } from 'react-router-dom';
import s from './card.module.scss';
function card(props) {
  return (
    <div>
      <li className={s.cards__item}>
        <Link className={s.cards__item__link} to={props.path}>
          <figure className={s.cards__item__pic__wrap} data-category={props.label}>
            <img className={s.cards__item__img} src={props.src} alt="Travel Image" />
          </figure>
          <div className={s.cards__item__info}>
            <h5 className={s.cards__item__text}>{props.text}</h5>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default card;
