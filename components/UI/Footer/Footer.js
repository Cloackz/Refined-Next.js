import Link from 'next/link'
import classNames from 'classnames'

import Container from '/components/UI/Container/Container'
import FooterNav from './FooterNav/FooterNav'
import Text from '/components/UI/Text/Text'
import Social from '/components/UI/Social/Social'

import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.Block}>
			<Container>
				<div className={styles.Content}>
					<div className={styles.Wrapper}>
						<FooterNav />
						<Social />
					</div>
					<div className={classNames(styles.Box, styles.Flex)}>
						<div className={styles.Item}>
							<Text type={styles.Info}>Email: refinedbyrachel@gmail.com</Text>
							<Text type={styles.Info}>Phone: (208) 296-5477</Text>
						</div>
						<div className={classNames(styles.Item, styles.Item_adress)}>
							<Text type={styles.Info}>
								3909 E Fairview Avenue Suite 100 Room #138, Meridian, Idaho
								83642
							</Text>
						</div>
						<div className={styles.Item}>
							<Text type={styles.Info}>
								Tuesday - Thursday: 10:00am to 6:00pm
							</Text>
							<Text type={styles.Info} text='Friday: 10am to 5:00pm' />
							<Text type={styles.Info}>Select Saturdays 10:00am - 2:00pm</Text>
							<Text type={styles.Info}>Monday: Closed</Text>
						</div>
					</div>
					<div className={classNames(styles.Bottom, styles.Flex)}>
						<div
							className={classNames(
								styles.Bottom_item,
								styles.Bottom_item_copyright
							)}
						>
							<Text type={styles.Info_bottom}>
								Copyright © 2021 Refined by Rachel Ryan, RN - All Rights
								Reserved.
							</Text>
						</div>
						<div
							className={classNames(
								styles.Bottom_item,
								styles.Bottom_item_licensed
							)}
						>
							<Text type={styles.Info_bottom}>Licensed and Insured.</Text>
						</div>
						<div className={classNames(styles.Bottom_item, styles.Dl)}>
							<Link href='#'>
								<a className={classNames(styles.Link)}>
									Web Design — Direct Line Development
								</a>
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
