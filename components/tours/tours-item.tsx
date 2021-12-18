export interface ToursItem {
	class: string,
	title: string,
	description: string,
	price: string
}

export interface ToursProps {
	tour: ToursItem
	onClick?: (tours: ToursItem) => void
}

export function Tour(props: ToursProps) {
	return (
		<section className={props.tour.class}>
			<h3 className="tour__title">{props.tour.title}</h3>
			<p className="tour__description">{props.tour.description}
			</p>
			<div className="tour__price-button">
				<p className="tour__price"> от <b>{props.tour.price}</b> р.</p>
				<button className="tour__button">Купить</button>
			</div>
		</section>
	)
}