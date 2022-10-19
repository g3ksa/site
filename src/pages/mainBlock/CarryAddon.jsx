import React from 'react'
import { motion } from 'framer-motion'

import styles from './carryAddon.module.scss'
import Curry from '../../img/stephen-curry.jpeg'

const animation = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { delay: 1, duration: 1.5 },
	},
}

export const CarryAddon = () => {
	return (
		<motion.div
			className={styles.block}
			initial='hidden'
			whileInView='visible'
			variants={animation}
			viewport={{ amount: 0.2, once: true }}
		>
			<img src={Curry} alt='' className={styles.img} />
			<div>
				А ещё я не только много зарабатываю, но и забил больше всех
				3-очковых в истории NBA
			</div>
		</motion.div>
	)
}
