import { Tour, ToursItem } from "./tours-item";
import { useState } from "react"

const allTours: ToursItem[] = [
	{
		class: 'tour',
		title: 'Навизвание',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis.',
		price: '10 000'
	},
	{
		class: 'tour',
		title: 'Навизвание',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis.',
		price: '10 000'
	},
	{
		class: 'tour--hidden',
		title: 'Навизвание',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis.',
		price: '10 000'
	},
	{
		class: 'tour--hidden',
		title: 'Навизвание',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis.',
		price: '10 000'
	},
	{
		class: 'tour--hidden',
		title: 'Навизвание',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis.',
		price: '10 000'
	},
	{
		class: 'tour--hidden',
		title: 'Навизвание',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis.',
		price: '10 000'
	},

]

export function Tours() {
	let MoreTours;
	const [visible, setVisible] = useState(true)
	const [nameButtonMoreTours, setNameButtonMoreTours] = useState('Больше')
	const ClickButtonMoreTours = () => {
		if (visible) {
			MoreTours = document.getElementsByClassName('tour--hidden')
			let QuantityMoreTours: number = MoreTours.length;
			for (let s = 0; s < QuantityMoreTours; s++) {
				MoreTours[0].className = 'tour--hidden-visible';
				setVisible(false)
				setNameButtonMoreTours('Меньше')
			}
		} else {
			MoreTours = document.getElementsByClassName('tour--hidden-visible')
			let QuantityMoreTours: number = MoreTours.length;
			for (let s = 0; s < QuantityMoreTours; s++) {
				MoreTours[0].className = 'tour--hidden';
				setVisible(true)
				setNameButtonMoreTours('Больше')
			}
		}
	}
	return (
		<article id="title_list2" className="tours">
			<h2 className="tours__title">Туры</h2>
			<div className="tours_content">
				{
					allTours.map((item: ToursItem, index: number) =>
						<Tour tour={item} key={`tours_${index}`} />
					)
				}
			</div>
			<button className="more-tour" type="button" onClick={ClickButtonMoreTours}>{nameButtonMoreTours} туров</button>
		</article>
	)
}