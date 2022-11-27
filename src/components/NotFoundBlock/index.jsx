import { Link } from 'react-router-dom';

import routes from '../../routes';

import NotFoundLogo from '../../assets/images/not-found-logo.png';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => (
  <div className={styles.content}>
    <img src={NotFoundLogo} className={styles.image} alt="Not found logo" />
    <div>
      <h1 className={styles.title}>Мы не нашли эту страницу</h1>
      <span className={styles.titleSub}>Но знаем, где найти много всего вкусного</span>
      <br />
      <Link className={styles.buttonToMenu} to={routes.HomePathPage()}>
        Перейти в меню
      </Link>
    </div>
    <div className={styles.details}>404 Error</div>
  </div>
);

export default NotFoundBlock;
