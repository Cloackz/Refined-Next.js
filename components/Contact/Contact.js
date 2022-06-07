import Link from 'next/link'
import classNames from 'classnames'

import Heading from '/components/UI/Heading/Heading'
import Text from '/components/UI/Text/Text'
import Map from '/components/Map/Map'
import Social from '/components/UI/Social/Social'
import Form from '/components/UI/Form/Form'

import styles from './Contact.module.scss'

const Contact = ({
	contact: { title, text, subtitle, tel, email },
	form,
	social,
}) => {
	return (
		<section className={styles.Block}>
			<div className={styles.Content}>
				<div className={styles.Wrapper__title}>
					<Heading tag='span' type='sub'>
						Contact Us
					</Heading>
					<Heading className={styles.Title} type='page'>
						{title}
					</Heading>
				</div>
				<div className={styles.Wrapper}>
					<Map></Map>
					<div className={styles.Inner}>
						<Text className={styles.Text}>{text}</Text>
						<div className={styles.Info}>
							<h3 className={styles.Info__title}>{subtitle}</h3>
							<Link href='tel:+2082965477'>
								<a className={classNames(styles.Link, styles.Info__tel)}>
									{tel}
								</a>
							</Link>
							<Link href='#'>
								<a className={styles.Link}>{email}</a>
							</Link>
							<Social social={social} />
						</div>
						<Form form={form} />
						<div className={styles.Capthca}>
							<p className={styles.Capthca__text}>
								This site is protected by reCAPTCHA and the
							</p>
							<a className={styles.Capthca__link}>Google Privacy Policy</a>
							<span className={styles.Capthca__text}>and</span>
							<a className={styles.Capthca__link}>Terms of Service apply.</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
