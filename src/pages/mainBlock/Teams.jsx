import React from 'react'
import { Block } from '../../components/block'
import { Title } from './../../components/title/index'

import styles from './teams.module.scss'
import teamExample from '../../img/nba-history-5.jpg'
import { Element } from 'react-scroll'

export const Teams = () => {
	return (
		<Block underline={{ isUnderline: 'true', position: 'left' }}>
			<Element name='teams'>
				<Title text='Команды NBA' textAlign='left' />
				<div className={styles.content}>
					<div className={styles.text}>
						NBA всегда была лигой, в которой доминировали так называемые
						«команды эпохи». В первые десятилетия были “Миннеаполис
						Лейкерс” и их звезда Джордж Майкен. С 1948 по 1954 год
						“Лейкерс” выиграли 5 чемпионатов. С 1957 по 1969 год “Бостон
						Селтикс” выиграли 11 чемпионатов в 13 сезонах, а в 1980-х
						“Лейкерс” и “Селтикс” собрали 8 из 10 титулов в течение
						десятилетия. Следующая эра баскетбола показала лучшие игры
						“Чикаго Буллз” и Майкла Джордана. В 2000-х годах “Лейкерс”
						снова стали лидерами, выиграв пять титулов.
					</div>
					<img src={teamExample} alt='' className={styles.img} />
				</div>
			</Element>
		</Block>
	)
}
