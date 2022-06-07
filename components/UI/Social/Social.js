import Item from '/components/UI/Social/SocialItem/SocialItem'

import styles from './Social.module.scss'

const Social = ({ social: { data } }) => {
	return (
		<div className={styles.Social}>
			{data.map(item => (
				<Item
					id={item.id}
					width={item.width}
					height={item.height}
					key={item.pk}
				/>
			))}
		</div>
	)
}

export default Social
