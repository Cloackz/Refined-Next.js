import Head from 'next/head'

import Header from '/components/UI/Header/Header'
import Footer from '/components/UI/Footer/Footer'

function Layout({ children }) {
	return (
		<>
			<Head>
				<meta charset='utf-8' />
				<meta name='viewport' content='width=device-width,initial-scale=1' />
				<meta name='google' content='notranslate' />
				<meta name='format-detection' content='telephone=no' />
				<meta
					name='description'
					content='We work hard to develop long lasting relationships with our customers and be the ‘go-to’ service provider for swimming pool remodeling.'
				/>
				<meta name='keywords' content='Refined' />
			</Head>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
