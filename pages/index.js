import Head from 'next/head'
import fetchApi from '/utils/api'
import Layout from '/layout/Layout'

import Hero from '/components/Hero/Hero'
import Services from '/components/Services/Services'
import Instagram from '/components/Instagram/Instagram'
import About from '/components/About/About'
import Testimonials from '/components/Testimonials/Testimonials'
import Faq from '/components/Faq/Faq'
import Contact from '/components/Contact/Contact'

export async function getServerSideProps() {
	const testimonialsPage = await fetchApi('testimonialsPage')
	const testimonials = await fetchApi('testimonials?_start=0&_end=6')
	const hero = await fetchApi('hero')
	const services = await fetchApi('services')
	const about = await fetchApi('about')
	const faq = await fetchApi('faq')
	const contact = await fetchApi('contact')

	return {
		props: {
			testimonialsPage,
			testimonials,
			hero,
			services,
			about,
			faq,
			contact,
		},
	}
}

export default function Home({
	testimonialsPage,
	testimonials,
	hero,
	services,
	about,
	faq,
	contact,
}) {
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
				<Testimonials
					testimonialsPage={testimonialsPage}
					testimonials={testimonials}
				/>
				<Faq faq={faq} />
				<Contact contact={contact} />
			</Layout>
		</>
	)
}
