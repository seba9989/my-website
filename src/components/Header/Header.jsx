import React from 'react'
import * as style from './Header.module.scss'
import { Link } from 'gatsby'

const Header = () => (
	<div className={style.main}>
		<Link to='/'>
			<h1>Seba9989.dev</h1>
		</Link>
		<nav>
			<Link to='/about'>About</Link>
			<Link to='https://github.com/seba9989'>GitHub</Link>
			<Link to='/Contact'>Contact</Link>
		</nav>
	</div>
)

export default Header
