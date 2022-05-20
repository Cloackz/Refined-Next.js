import Image from 'next/image'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.Block}>
			<div className={styles.Wrapper}>
				<Image
					className='Logo'
					alt='logo'
					src='/img/logo.png'
					layout='fill'
					objectFit='center'
				/>
			</div>
		</header>
	)
}

export default Header
