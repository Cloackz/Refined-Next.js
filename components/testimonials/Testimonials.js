import Container from '/components/UI/Container/Container'
import Heading from '/components/UI/Heading/Heading'

import Item from './testimonialsRewievsItem/TestimonialsRewievsItem'

import styles from './Testimonials.module.scss'

const Testimonials = ({ testimonials: { data, title } }) => (
	<section className={styles.Block}>
		<Container>
			<div className={styles.Content}>
				<Heading tag='span' text='Testimonials' type='sub'></Heading>
				<Heading className={styles.Title} text={title} type='page'></Heading>
				<ul className={styles.List}>
					{data.map(testimonial => (
						<Item
							title={testimonial.title}
							text={testimonial.text}
							rating={testimonial.rating}
							key={testimonial.pk}
						/>
					))}
				</ul>
			</div>
		</Container>
	</section>
)

export default Testimonials
