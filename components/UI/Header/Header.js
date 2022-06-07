import Image from 'next/image'
import Link from 'next/link'

import Button from '/components/UI/Btn/Btn'

import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.Block}>
			<div className={styles.Wrapper}>
				<Link href='/'>
					<Button className={styles.Link} href>
						<Image
							className='Logo'
							alt='logo'
							src='/img/logo.png'
							layout='fill'
							objectFit='center'
						/>
					</Button>
				</Link>
			</div>
		</header>
	)
}

export default Header
