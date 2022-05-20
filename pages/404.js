import Head from 'next/head'
import styles from '/styles/404.module.scss'
import Heading from '/components/UI/Heading/Heading.jsx'
import Button from '/components/UI/Button/Link.jsx'
import Layout from '../layout/Layout'

const Error = () => {
	return (
		<>
			<Head>
				<title>404 Error</title>
			</Head>
			<Layout>
				<div className={styles.Error}>
					<span className={styles.Code}>404</span>
					<Heading
						className={styles.Title}
						tag='h1'
						text='Sorry, page not found'
					></Heading>
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

export default Error
