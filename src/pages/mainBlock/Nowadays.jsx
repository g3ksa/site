import React from 'react'
import { Title } from '../../components/title'
import { Block } from '../../components/block'

import styles from './nowadays.module.scss'
import Salaries from '../../img/NBA salaries.png'
import { Element } from 'react-scroll'

export const Nowadays = () => {
	return (
		<Element name='nowadays'>
			<Block>
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
			</Block>
		</Element>
	)
}
