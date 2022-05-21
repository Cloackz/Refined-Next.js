import Head from 'next/head'

import '../styles/global.scss'
import '/styles/variables.scss'
import '/public/fonts/font-name.css'

function MyApp({ Component, pageProps }) {
	function requireAll(r) {
		r.keys().forEach(r)
	}
	requireAll(require.context('/public/sprite/', true, /\.svg$/))
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width,initial-scale=1' />
				<meta name='google' content='notranslate' />
				<meta name='format-detection' content='telephone=no' />
				<meta
					name='description'
					content='We work hard to develop long lasting relationships with our customers and be the ‘go-to’ service provider for swimming pool remodeling.'
				/>
				<meta name='keywords' content='Refined' />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
