import { useEffect, useState } from 'react'

const useMedia = (query, defaultState = false) => {
	const [state, setState] = useState(defaultState)
	const [isMount, setMount] = useState(false)

	useEffect(() => {
		setMount(true)
		return () => setMount(false)
	}, [])

	useEffect(() => {
		if (!isMount) {
			return
		}
		let mounted = true
		const mql = window.matchMedia(query)
		const onChange = () => {
			if (!mounted) {
				return
			}
			setState(!!mql.matches)
		}

		mql.addListener(onChange)
		setState(!!mql.matches)

		return () => {
			mounted = false
			mql.removeListener(onChange)
		}
	}, [query, isMount])

	return isMount ? state : defaultState
}

export default useMedia
