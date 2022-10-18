import React from 'react';
import styles from './footer.module.scss';
import { Container } from '../container';
import { GiMoneyStack } from 'react-icons/gi';

export const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className={styles.container}>
            <div>{'Материалы сайта не используются в коммерческих целях'}</div>
            <div>{`\u00A9 Alexey Proshenko, 2022`}</div>
         </div>
      </footer>
   );
};
