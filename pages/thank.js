import Head from 'next/head'
import styles from '/styles/thank.module.scss'
import Heading from '/components/UI/Heading/Heading.jsx'
import Button from '/components/UI/Button/Link.jsx'
import Text from '/components/UI/Text/Text.jsx'

import Layout from '../layout/Layout'

const Thank = () => {
	return (
		<>
			<Head>
				<title>Thank you</title>
			</Head>
			<Layout>
				<div className={styles.Thank}>
					<div className={styles.Vector}></div>
					<Heading
						className={styles.Title}
						tag='h1'
						text='Thank You!'
					></Heading>
					<Text
						className={styles.Text}
						text='Your application has been submitted!'
					/>
					<Text
						className={styles.Text}
						text='Our specialists will contact you as soon as possible. If you have an urgent question, you can call us'
					/>
					<Button
						className={styles.Button}
						href='/'
						text='Sorry, Page Not Found'
					></Button>
				</div>
			</Layout>
		</>
	)
}

export default Thank
