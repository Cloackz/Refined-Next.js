import Head from 'next/head'
import Layout from '../layout/Layout'

import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Instagram from '../components/instagram/Instagram'
import About from '../components/About/About'

export default function Home() {
	return (
		<>
			<Head>
				<title>Refined</title>
			</Head>
			<Layout>
				<Hero />
				<Services />
				<Instagram />
				<About />
			</Layout>
		</>
	)
}
