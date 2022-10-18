//import './Header.css';
//import BurgerMenu from './burger_menu.js';
import { Link } from 'react-scroll'
import * as Scroll from 'react-scroll'

import { CustomLink } from '../CustomLink'
import { ChangeTheme } from '../changeTheme'
import styles from './header.module.scss'

const scroll = Scroll.animateScroll
export const scrollToTop = () => {
	scroll.scrollToTop()
}

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
						<div className={styles.item}>
							<Link
								to='history'
								className={styles.link}
								smooth={true}
								duration={500}
								spy={true}
							>
								История
							</Link>
						</div>
						<div className={styles.item}>
							<Link
								to='teams'
								className={styles.link}
								smooth={true}
								duration={500}
								spy={true}
							>
								Команды
							</Link>
						</div>
						<div className={styles.item}>
							<Link
								to='rules'
								className={styles.link}
								smooth={true}
								duration={500}
								spy={true}
							>
								Регламент
							</Link>
						</div>
						<div className={styles.item}>
							<Link
								to='nowadays'
								className={styles.link}
								smooth={true}
								duration={500}
								spy={true}
							>
								Настоящее время
							</Link>
						</div>
						<ChangeTheme />
					</div>
				</div>
			</div>
		</header>
	)
}

export { Header }
