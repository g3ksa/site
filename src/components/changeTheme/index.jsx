import { useState, useContext, useCallback } from 'react';
import { motion } from 'framer-motion';

import { ThemeContext } from '../ThemeProvider';
import Moon from '../../img/moon.svg';
import Sun from '../../img/sun.svg';
import styles from './changeTheme.module.scss';

const spring = {
   type: 'spring',
   stiffness: 700,
   damping: 25,
};

const ChangeTheme = () => {
   const [isOn, setIsOn] = useState(
      !localStorage.isOn ? true : localStorage.getItem('isOn') === 'true'
   );
   const { theme, updateTheme } = useContext(ThemeContext);

   const toggleSwitch = useCallback(() => {
      setIsOn(!isOn);
      updateTheme(theme === 'dark' ? 'light' : 'dark');
      const html = document.querySelector('html');
      if (html.classList.contains('light')) {
         html.classList.remove('light');
         html.classList.add('dark');
         localStorage.setItem('theme', 'dark');
         localStorage.setItem('isOn', 'true');
      } else {
         html.classList.remove('dark');
         html.classList.add('light');
         localStorage.setItem('theme', 'light');
         localStorage.setItem('isOn', 'false');
      }
   }, [theme]);

   return (
      <div className={styles.container} data-isOn={isOn} onClick={toggleSwitch}>
         <motion.div className={styles.item} layout transition={spring}>
            <img src={theme == 'dark' ? Moon : Sun}></img>
         </motion.div>
      </div>
   );
};

export { ChangeTheme };
