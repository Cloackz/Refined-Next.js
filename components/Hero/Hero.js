import Image from 'next/image'

import Container from '../UI/Container/Container'
import Heading from '../UI/Heading/Heading'
import Button from '../UI/Button/Button'
import Text from '../UI/Text/Text'

import useMedia from '../../hooks/useMedia'
import styles from './Hero.module.scss'

const Hero = () => {
	const isMobile = useMedia('(max-width: 767px)')
	const isTablet = useMedia('(max-width: 1023px)')

	const images = {
		mobile: '/img/hero-mobile.jpg',
		tablet: '/img/hero-tablet.jpg',
		desktop: '/img/hero.jpg',
	}

	const imageMedia = () => {
		if (isMobile) {
			return images.mobile
		} else if (isTablet) {
			return images.tablet
		} else return images.desktop
	}

	return (
		<section className={styles.Hero}>
			<div className={styles.Content}>
				<div className={styles.Wrapper}>
					<Image
						className='Img'
						alt='hero'
						src={imageMedia()}
						layout='fill'
						objectFit='center'
					/>
				</div>
				<Heading
					className={styles.Title}
					text='med spa located in meridian, idaho'
					tag='h1'
				/>
				<Text
					className={styles.Text}
					text='It is our mission to deliver beautiful and natural results while
        	maintaining safety and professionalism.'
				/>
				<Button
					className={styles.Button}
					type='Button'
					text='Book Now'
				></Button>
			</div>
		</section>
	)
}

export default Hero
