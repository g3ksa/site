//import './MainBlock.css';
import { Container } from '../../components/container'
import About from './About'
import { History } from './History'
import { Nowadays } from './Nowadays'
import { Rules } from './Rules'
import { Teams } from './Teams'

function MainBlock() {
	return (
		<Container>
			<About />
			<History />
			<Teams />
			<Rules />
			<Nowadays />
		</Container>
	)
}
export { MainBlock }
