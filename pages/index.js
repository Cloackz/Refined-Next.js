import Head from 'next/head'
import fetchApi from '/utils/api'
import Layout from '../layout/Layout'

import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Instagram from '../components/instagram/Instagram'
import About from '../components/About/About'
import Testimonials from '../components/testimonials/Testimonials'

export async function getServerSideProps() {
	const testimonials = await fetchApi('testimonials')
	const hero = await fetchApi('hero')
	const services = await fetchApi('services')
	const about = await fetchApi('about')

	return {
		props: {
			testimonials,
			hero,
			services,
			about,
		},
	}
}

export default function Home({ testimonials, hero, services, about }) {
	return (
		<>
			<Head>
				<title>Refined</title>
			</Head>
			<Layout>
				<Hero hero={hero} />
				<Services services={services} />
				<Instagram />
				<About about={about} />
				<Testimonials testimonials={testimonials} />
			</Layout>
		</>
	)
}
