import styles from './Footer.module.scss'
import Container from '/components/UI/Container/Container'
import FooterNav from './FooterNav/FooterNav'
import Text from '../Text/Text'
import Social from '/components/UI/Social/Social'
import classNames from 'classnames'
import Link from 'next/link'

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
							<Text
								type={styles.Info}
								text='Email: refinedbyrachel@gmail.com'
							/>
							<Text type={styles.Info} text='Phone: (208) 296-5477' />
						</div>
						<div className={classNames(styles.Item, styles.Item_adress)}>
							<Text
								type={styles.Info}
								text='3909 E Fairview Avenue Suite 100 Room #138, Meridian, Idaho 83642'
							/>
						</div>
						<div className={styles.Item}>
							<Text
								type={styles.Info}
								text='Tuesday - Thursday: 10:00am to 6:00pm'
							/>
							<Text type={styles.Info} text='Friday: 10am to 5:00pm' />
							<Text
								type={styles.Info}
								text='Select Saturdays 10:00am - 2:00pm'
							/>
							<Text type={styles.Info} text='Monday: Closed' />
						</div>
					</div>
					<div className={classNames(styles.Bottom, styles.Flex)}>
						<div
							className={classNames(
								styles.Bottom_item,
								styles.Bottom_item_copyright
							)}
						>
							<Text
								type={styles.Info_bottom}
								text='Copyright © 2021 Refined by Rachel Ryan, RN - All Rights Reserved.'
							/>
						</div>
						<div
							className={classNames(
								styles.Bottom_item,
								styles.Bottom_item_licensed
							)}
						>
							<Text type={styles.Info_bottom} text='Licensed and Insured.' />
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
