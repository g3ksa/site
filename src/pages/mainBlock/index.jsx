//import './MainBlock.css';
import { Container } from '../../components/container'
import { ProgressBar } from '../../components/progressBar'
import About from './About'
import { History } from './History'
import { Nowadays } from './Nowadays'
import { Rules } from './Rules'
import { Teams } from './Teams'
import { CarryAddon } from './CarryAddon'

function MainBlock() {
	return (
		<>
			<About />
			<Container>
				<History />
				<Teams />
				<Rules />
				<Nowadays />
			</Container>
		</>
	)
}
export { MainBlock }
