import Head from 'next/head'
import Link from 'next/link'

import Heading from '/components/UI/Heading/Heading'
import Button from '/components/UI/Btn/Btn'
import Layout from '/layout/Layout'

import styles from '/styles/404.module.scss'

const Error = () => {
	return (
		<>
			<Head>
				<title>404 Error</title>
			</Head>
			<Layout>
				<div className={styles.Error}>
					<span className={styles.Code}>404</span>
					<Heading className={styles.Title} tag='h1' type='main'>
						Sorry, page not found
					</Heading>
					<Link href='/'>
						<Button className={styles.Button} href='/' type='primary'>
							go home page
						</Button>
					</Link>
				</div>
			</Layout>
		</>
	)
}

export default Error
