import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'

import styles from './block.module.scss'
import classNames from 'classnames'

export const Block = forwardRef(
	(
		{
			children,
			ref,
			underline = { isUnderline: 'false', position: undefined },
			className,
		},
		...props
	) => {
		//const { children } = props
		console.log(underline.isUnderline)
		return (
			<div
				className={classNames(styles.block, className)}
				underline={underline.isUnderline}
				underline-position={underline?.position}
				//underlinePosition={underlinePosition}
				ref={ref}
				{...props}
			>
				{children}
			</div>
		)
	}
)

export const MotionBlock = motion(Block)
