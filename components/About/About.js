import Image from 'next/image'
import useMedia from '../../hooks/useMedia'

import Heading from '../UI/Heading/Heading'
import Text from '../UI/Text/Text'
import Container from '../UI/Container/Container'

import styles from './About.module.scss'
import classNames from 'classnames'

const About = ({ about: { title, head, text, quote } }) => {
	const isMobile = useMedia('(max-width: 767px)')
	const isTablet = useMedia('(max-width: 1023px)')

	const images = {
		mobile: '/img/about-mobile.jpg',
		tablet: '/img/about-tablet.jpg',
		desktop: '/img/about.jpg',
	}

	const imageMedia = () => {
		if (isMobile) {
			return images.mobile
		} else if (isTablet) {
			return images.tablet
		} else return images.desktop
	}

	return (
		<section className={styles.Block}>
			<Container>
				<div className={styles.Content}>
					<Heading tag='span' text='About Me' type='sub'></Heading>
					<Heading className={styles.Title} text={title} type='page'></Heading>
					<div className={styles.Inner}>
						<div className={styles.Wrapper}>
							<Image
								className='Image'
								alt='hero'
								src={imageMedia()}
								layout='fill'
								objectFit='center'
							/>
						</div>
						<div className={styles.Bottom}>
							<div className={styles.Descrip}>
								<h3 className={styles.Descrip__title}>{head}</h3>
								<Text
									className={classNames(styles.Text, styles.Descrip__text)}
									text={text}
								></Text>
							</div>
							<div className={styles.Quote}>
								<blockquote>
									<Text className={styles.Quote__text} text={quote}></Text>
								</blockquote>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default About
