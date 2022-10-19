import styles from './about.module.scss'
import { Title } from '../../components/title'
import { Block } from '../../components/block'
import { Container } from '../../components/container'
import { motion, useScroll, useTransform } from 'framer-motion'

function About() {
	const { scrollY } = useScroll()
	const opacity = useTransform(scrollY, [0, 500], [1, 0])

	return (
		<div className={styles.block}>
			<div className={styles.img} />
			<Container className={styles.container}>
				<motion.div className={styles.title} style={{ opacity }}>
					Как создавалась и развивалась NBA, крупнейшая баскетбольная
					ассоциация
				</motion.div>
			</Container>
		</div>
	)
}

export default About
