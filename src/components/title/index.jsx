import styles from './title.module.scss'

import React from 'react'

export const Title = ({ text, textAlign, ...props }) => {
	let redText
	if (text) {
		redText = text.split('\n').map((str, index) => (
			<span key={index}>
				{str}
				<br />
			</span>
		))
	} else {
		return (
			<div
				className={styles.title}
				style={{ textAlign: textAlign }}
				{...props}
			/>
		)
	}
	return (
		<div className={styles.title} style={{ textAlign: textAlign }} {...props}>
			{redText}
		</div>
	)
}
