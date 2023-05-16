import React from 'react'
import '/src/index.scss'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import * as style from './layout.module.scss'

export default function Layout({ children }) {
	return (
		<div className={style.main}>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
