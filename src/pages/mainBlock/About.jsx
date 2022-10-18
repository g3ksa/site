import styles from './about.module.scss'
import { Title } from '../../components/title'
import { Block } from '../../components/block'
import { Container } from '../../components/container'

function About() {
	return (
		<div className={styles.block}>
			<div className={styles.img} />
			<Container className={styles.container}>
				<div className={styles.title}>
					Как создавалась и развивалась NBA, крупнейшая баскетбольная
					ассоциация
				</div>
			</Container>
		</div>
	)
}

export default About
