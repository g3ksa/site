import classNames from 'classnames'
import React from 'react'
import styles from './container.module.scss'

export const Container = ({ children, className }, props) => {
	return (
		<div className={classNames(styles.container, className)} {...props}>
			{children}
		</div>
	)
}
