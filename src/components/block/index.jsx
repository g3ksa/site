import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'

import styles from './block.module.scss'
import classNames from 'classnames'

export const Block = forwardRef(
	(
		{
			children,
			underline = { isUnderline: 'false', position: undefined },
			className,
		},
		ref,
		...props
	) => {
		return (
			<div
				className={classNames(styles.block, className)}
				underline={underline.isUnderline}
				underline-position={underline?.position}
				ref={ref}
				{...props}
			>
				{children}
			</div>
		)
	}
)

// export const Block = forwardRef((props, ref) => {
// 	const { children } = props
// 	return (
// 		<div className={styles.block} ref={ref} {...props}>
// 			{children}
// 		</div>
// 	)
// })

export const MotionBlock = motion(Block)
