import '../styles/global.scss'
import '/styles/variables.scss'
import '/public/fonts/font-name.css'

function MyApp({ Component, pageProps }) {
	function requireAll(r) {
		r.keys().forEach(r)
	}
	requireAll(require.context('/public/sprite/', true, /\.svg$/))
	return <Component {...pageProps} />
}

export default MyApp
