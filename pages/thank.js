import Head from 'next/head'
import Link from 'next/link'

import Heading from '/components/UI/Heading/Heading'
import Button from '/components/UI/Btn/Btn'
import Text from '/components/UI/Text/Text'
import Layout from '../layout/Layout'

import styles from '/styles/thank.module.scss'

const Thank = () => {
	return (
		<>
			<Head>
				<title>Thank you</title>
			</Head>
			<Layout>
				<div className={styles.Thank}>
					<div className={styles.Vector}></div>
					<Heading className={styles.Title} tag='h1' type='main'>
						Thank You!
					</Heading>
					<Text className={styles.Text}>
						Your application has been submitted!
					</Text>
					<Text className={styles.Text}>
						Our specialists will contact you as soon as possible. If you have an
						urgent question, you can call us
					</Text>
					<Link href='/'>
						<Button className={styles.Button} type='primary' href='/'>
							go home page
						</Button>
					</Link>
				</div>
			</Layout>
		</>
	)
}

export default Thank
