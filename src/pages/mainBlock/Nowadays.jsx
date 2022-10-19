import React from 'react'
import { Element } from 'react-scroll'

import { Title } from '../../components/title'
import { MotionBlock } from '../../components/block'
import Salaries from '../../img/NBA salaries.png'
import blockAnimation from './blockAnimation'
import { CarryAddon } from './CarryAddon'

import styles from './nowadays.module.scss'

export const Nowadays = () => {
	return (
		<MotionBlock
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			variants={blockAnimation}
		>
			<Element name='nowadays'>
				<Title text='NBA в настоящее время' />
				<div className={styles.content}>
					<div className={styles.text}>
						В настоящее время NBA славится своими охватами по ТВ,
						количеством болельщиков по всему миру, а также количеством
						денег в лиге. Не трудно догадаться, что в такой популярной
						лиге звезды получают большие зарплаты, но вряд-ли можно
						предположить насколько они велики. Данная информация отражена
						на инфографике ниже.
					</div>
					<img src={Salaries} alt='' className={styles.img} />
				</div>
			</Element>
			<CarryAddon />
		</MotionBlock>
	)
}
