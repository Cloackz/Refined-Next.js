import Image from 'next/image'
import Link from 'next/link'

import Heading from '/components/UI/Heading/Heading'
import Button from '/components/UI/Btn/Btn'
import Text from '/components/UI/Text/Text'

import useMedia from '../../hooks/useMedia'
import styles from './Hero.module.scss'

const Hero = ({ hero: { title, text } }) => {
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
						alt='hero'
						src={imageMedia()}
						layout='fill'
						objectFit='center'
					/>
				</div>
				<Heading className={styles.Title} tag='h1' type='main'>
					{title}
				</Heading>
				<Text className={styles.Text}>{text}</Text>
				<Link href='#'>
					<Button className={styles.Button} type='primary'>
						Book Now
					</Button>
				</Link>
			</div>
		</section>
	)
}

export default Hero
