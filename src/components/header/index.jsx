//import './Header.css';
//import BurgerMenu from './burger_menu.js';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';

import { CustomLink } from '../CustomLink';
import { ChangeTheme } from '../changeTheme';
import styles from './header.module.scss';

const scroll = Scroll.animateScroll;
export const scrollToTop = () => {
   scroll.scrollToTop();
};

const Header = () => {
   return (
      <header className={styles.header}>
         <div className={styles.container}>
            <div className={styles.row}>
               <div className={styles.logo}>
                  <Link to='/' onClick={scrollToTop}>
                      Баскетбол ногой
                  </Link>
               </div>
               <div className={styles.menu}>
                  <ChangeTheme />
               </div>
            </div>
         </div>
      </header>
   );
};

export { Header };
