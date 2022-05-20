import Image from 'next/image'
import useMedia from '../../hooks/useMedia'

import Heading from '../UI/Heading/Heading'
import Text from '../UI/Text/Text'
import Container from '../UI/Container/Container'

import styles from './About.module.scss'
import classNames from 'classnames'

const About = () => {
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
					<Heading
						className={styles.Title}
						text='meet the owner'
						type='page'
					></Heading>
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
								<h3 className={styles.Descrip__title}>rachel ryan</h3>
								<Text
									className={classNames(styles.Text, styles.Descrip__text)}
									text='Hello! My name is Rachel Ryan and I am a Registered Nurse with my Masters in Administrative Nurse Leadership and masters
									degree as a Family Nurse Practitioner. I have been an Aesthetic Nurse since graduating Nursing school in 2015 and am
									very dedicated to continuing education and learning new and up-to-date techniques. My passion is helping men and women
									age gracefully while maintaining their natural aesthetic. I have an artistic eye for facial details and maintaining
									symmetry through non-invasive and non-surgical treatments including Botox and fillers.'
								></Text>
							</div>
							<div className={styles.Quote}>
								<blockquote>
									<Text
										className={styles.Quote__text}
										text='It is my mission to deliver beautiful and natural results while maintaining safety and professionalism.'
									></Text>
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
