import React from 'react'
import { Element } from 'react-scroll'

import { MotionBlock } from '../../components/block/'
import { Title } from '../../components/title'
import blockAnimation from './blockAnimation'

import styles from './rules.module.scss'

export const Rules = () => {
	return (
		<MotionBlock
			underline={{ isUnderline: 'true', position: 'left' }}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			variants={blockAnimation}
		>
			<Element name='rules'>
				<Title text='Регламент NBA' />
				<div className={styles.content}>
					<div className={styles.text}>
						Национальная баскетбольная ассоциация также славится
						неофициальным регламентом и способами его нарушения. Расскажем
						о самых важных и интересных из них:
					</div>
					<ul className={styles.list}>
						<li className={styles.item}>
							Клубы делятся на Восточную и Западную конференцию. В состав
							каждой из них входит по три дивизиона: Атлантический,
							Центральный и Юго-Восточный относятся к первому и
							Северо-Западный, Тихоокеанский и Юго-Западный – ко второму.
						</li>
						<li className={styles.item}>
							Правила, применяемые во время игры, имеют свою историю. К
							примеру, «правило 24 секунд». Это означает, что команда,
							владеющая мячом, должна сделать бросок в течение 24 секунд.
						</li>
						<li className={styles.item}>
							Правило Майкена создано, как понятно из названия, в честь
							баскетболиста Джорджа Майкена. Создание трехсекундной зоны
							около кольца связано с тем, что спортсмен был очень
							высокого роста – 208 см и веса – 114 кг. Он просто стоял у
							кольца и закидывал мячи, которые ему пасовали. Соперники
							возмущались, после чего было введено правило нахождения
							игроков у кольца.
						</li>
						<li className={styles.item}>
							Помеха попаданию мяча в кольцо также создана из-за Майкена.
							Как он ловко закидывал мячи в кольцо противника, так же
							хорошо он отбрасывал их от своего. Поэтому было введено
							правило, запрещающее трогать мяч, если он снижается после
							броска, но все еще находится выше корзины.
						</li>
						<li className={styles.item}>
							Правила спортивной формы, существовавшие в NBA до 1980-х
							годов, гласили, что обувь игрока должна сочетаться с формой
							команды. Несмотря на это все носили белые кроссовки. Когда
							Майкл Джордан заключил контракт с Найк и надел на игру
							красно-черные Air Jordan, ассоциация его оштрафовала на 5
							000 долларов. В итоге Nike сделал на этом неплохую рекламу
							и оплачивал все штрафы.
						</li>
					</ul>
				</div>
			</Element>
		</MotionBlock>
	)
}
