import Container from '/components/UI/Container/Container'
import Heading from '/components/UI/Heading/Heading'
import Button from '/components/UI/Btn/Btn'
import Text from '/components/UI/Text/Text'
import List from './ServicesBox/ServicesBox'
import Item from './ServicesItem/ServicesItem'

import styles from './Services.module.scss'

const Services = ({ services: { title, text } }) => {
	return (
		<section className={styles.Block}>
			<Container>
				<div className={styles.Content}>
					<Heading tag='span' type='sub'>
						Our Services
					</Heading>
					<Heading className={styles.Title} type='page'>
						{title}
					</Heading>
					<Text className={styles.Text}>{text}</Text>
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
					<Button className={styles.Button} type='secondary'>
						Book Now
					</Button>
				</div>
			</Container>
		</section>
	)
}

export default Services
