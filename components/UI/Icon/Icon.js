const Icon = ({ id, style, className, height, width }) => (
	<svg height={height} width={width} className={className} style={style}>
		<use xlinkHref={`#${id}`} />
	</svg>
)

export default Icon
