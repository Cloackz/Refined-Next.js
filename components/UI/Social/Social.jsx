import styles from './Social.module.scss'
import SocialItem from './SocialItem/SocialItem'

const Social = () => {
	return (
		<ul className={styles.Social}>
			<SocialItem />
		</ul>
	)
}

export default Social
