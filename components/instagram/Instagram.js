import styles from './Instagram.module.scss'
import Container from '../UI/Container/Container'
import Heading from '../UI/Heading/Heading'
import Item from './InstagramItem/InstagramItem'

const Instagram = () => {
	return (
		<section className={styles.Block}>
			<Container>
				<div className={styles.Content}>
					<Heading tag='p' text='Instagram' type='sub'></Heading>
					<Heading
						className={styles.Title}
						text='follow me '
						type='page'
					></Heading>
					<ul className={styles.List}>
						<Item path='/img/instagram1.jpg' alt='Instagram one' />
						<Item path='/img/instagram2.jpg' alt='Instagram two' />
						<Item path='/img/instagram3.jpg' alt='Instagram three' />
						<Item path='/img/instagram4.jpg' alt='Instagram four' />
						<Item path='/img/instagram5.jpg' alt='Instagram five' />
						<Item path='/img/instagram6.jpg' alt='Instagram six' />
					</ul>
				</div>
			</Container>
		</section>
	)
}

export default Instagram
