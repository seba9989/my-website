import React from 'react'
import * as style from './Footer.module.scss'
import { Link } from 'gatsby'

const Footer = () => (
	<div className={style.main}>
		<h1>Seba9989.dev</h1>
		<nav>
			<Link>
				<button>About</button>
			</Link>
			<Link>
				<button>GitHub</button>
			</Link>
			<Link>
				<button>Contact</button>
			</Link>
		</nav>
	</div>
)

export default Footer
