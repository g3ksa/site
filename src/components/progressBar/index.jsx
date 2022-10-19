import {
	AnimatePresence,
	motion,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion'
import styles from './progressBar.module.scss'

import Ball from '../../img/basketball.png'

const spring = {
	type: 'spring',
	yoyo: Infinity,
	duration: 7,
}

export const ProgressBar = () => {
	const { scrollYProgress, scrollY } = useScroll()
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	})
	// const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
	// const x = useTransform(scrollYProgress, [0, 1], ['0', '100px'])
	// const y = useTransform(scrollYProgress, [0, 1], ['0', '100px'])

	return (
		<motion.div
			className={styles.container}
			// initial={{ x: 0, rotate: 0 }}
			// animate={{ x: '100vw', rotate: 720 }}
			// exit={{ x: 0, rotate: 0 }}
			transition={spring}
		>
			<motion.div style={{ scaleX }} className={styles.ProgressBar} />
		</motion.div>
	)
}
