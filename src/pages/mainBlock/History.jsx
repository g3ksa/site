import React from 'react'
import { Element } from 'react-scroll'

import { Block, MotionBlock } from '../../components/block'
import { Title } from './../../components/title/index'
import historyImg from '../../img/nba-history-4-800x643.jpg'
import blockAnimation from './blockAnimation'

import styles from './history.module.scss'

export const History = () => {
	return (
		<MotionBlock
			underline={{ isUnderline: 'true', position: 'left' }}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			variants={blockAnimation}
		>
			<Element name='history'>
				<Title text={'История'} textAlign='left' />
				<div className={styles.content}>
					<div className={styles.text}>
						НБА начала свою жизнь как Баскетбольная ассоциация Америки в
						1946 году. Тогда туда входили 11 команд, а сегодня лига
						насчитывает 30, среди которых команды, известные не только
						любителям баскетбола. Ассоциация является ведущей мужской
						профессиональной баскетбольной лигой и одной из четырех
						главных профессиональных спортивных лиг в США и ​​Канаде.
					</div>
					<div className={styles.text}>
						Начнем с того, что в 1891 году Джеймс Нейсмит придумал такую
						игру, как баскетбол. Будучи родом из Канады, но проживая в
						Америке, он преподавал физкультуру в колледже. Занятия в зале
						были однообразными и скучными. Тогда Джеймс повесил по краям
						корзины, куда предложил забрасывать мячи. Новость об игре
						стала распространяться по стране, и вскоре появились местные
						команды по баскетболу. Вслед за ними образовывались лиги. Они
						появлялись и исчезали одна за другой. Но две особенно
						выделялись: Национальная баскетбольная лига (НБЛ), основанная
						в 1936 году, и Баскетбольная ассоциация Америки (БАА).
					</div>
					<div
						className={styles.text}
					>{`Когда две лиги слились в 1949 году, общее количество команд достигло 16-ти, а название было преобразовано в Национальную баскетбольную ассоциацию. Тем не менее, в 1950-х годах количество команд сократилось вместе с поддержкой болельщиков, и к сезону 1954-55 годов их осталось только восемь.`}</div>
					<img src={historyImg} alt='' className={styles.img} />
				</div>
			</Element>
		</MotionBlock>
	)
}
