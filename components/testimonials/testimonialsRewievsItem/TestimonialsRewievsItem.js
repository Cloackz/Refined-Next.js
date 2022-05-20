import Star from '../testimonialsStar/testimonialsStar'
import Text from '/components/UI/Text/Text'

import styles from './TestimonialsRewievsItem.module.scss'

const TestimonialsRewievsItem = ({ text, title, rating }) => {
	const ratingCount = []
	for (let i = 0; i < rating; i++) ratingCount.push(i)

	return (
		<li className={styles.Item}>
			<div className={styles.Head}>
				<h3 className={styles.Title}>{title}</h3>
				<ul className={styles.List}>
					{ratingCount.map(star => (
						<Star key={star} />
					))}
				</ul>
			</div>
			<Text text={text}></Text>
		</li>
	)
}

export default TestimonialsRewievsItem
