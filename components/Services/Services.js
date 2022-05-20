import Container from '../UI/Container/Container'
import Heading from '../UI/Heading/Heading'
import Button from '../UI/Button/Link'
import Text from '../UI/Text/Text'
import styles from './Services.module.scss'
import List from './ServicesBox/ServicesBox'
import Item from './ServicesItem/ServicesItem'

const Services = () => {
	return (
		<section className={styles.Block}>
			<Container>
				<div className={styles.Content}>
					<Heading tag='span' text='Our Services' type='sub'></Heading>
					<Heading
						className={styles.Title}
						text='our services'
						type='page'
					></Heading>
					<Text
						className={styles.Text}
						text='We specialize in non-invasive and non-surgical treatments including Botox and fillers. '
					></Text>
					<div className={styles.Wrapper}>
						<div className={styles.Group}>
							<List title='Dermal Filter'>
								<Item service='LIp filler' price='$575'></Item>
								<Item service='Cheek fille' price='$1150'></Item>
								<Item service='Chin/Jawline filler' price='$1250'></Item>
								<Item service='Hand filler' price='$1650'></Item>
								<Item service='Undereye filler' price='$1250'></Item>
							</List>
							<List title='Sculptra'>
								<Item service='Upper face sculptra' price='$750'></Item>
								<Item service='Lower face sculptra ' price='$750'></Item>
								<Item service='Full face sculptra ' price='$1500'></Item>
							</List>
						</div>
						<div className={styles.Group}>
							<List title='Botox / Dysport'>
								<Item service='New Patient Botox/Dysport' price='$8.75'></Item>
								<Item
									service='Returning Patient Botox/Dysport'
									price='$8.75'
								></Item>
							</List>
							<List title='Chemical peel'>
								<Item service='Peel' price='$175'></Item>
							</List>
						</div>
					</div>
					<Button
						className={styles.Button}
						type='Primary'
						href='#'
						text='Book Now'
					/>
				</div>
			</Container>
		</section>
	)
}

export default Services
