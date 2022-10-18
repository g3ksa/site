import styles from './about.module.scss'
import { Title } from '../../components/title'
import { Block } from '../../components/block'

function About() {
	return (
		<Block underline={{ isUnderline: 'true', position: 'center' }}>
			<Title
				text={
					'Как создавалась и развивалась NBA, крупнейшая баскетбольная ассоциация'
				}
				textAlign='center'
			></Title>
		</Block>
	)
}

export default About
