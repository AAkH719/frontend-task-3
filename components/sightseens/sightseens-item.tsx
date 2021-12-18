export interface SightseensBlock {
	title: string
	image: string
	description: string
}

export interface SightseensProps {
	sightseen: SightseensBlock,
	onClick?: (sightseen: SightseensBlock) => void
}

export function Sightseen(props: SightseensProps) {
	return (
		<section className="item">
			<figure className="image">
				<img className="image__attrac" src={props.sightseen.image} alt="image__attrac" />
			</figure>
			<div>
				<header className="subtitle">
					<h3>{props.sightseen.title}</h3>
				</header>
				<p className="text"> {props.sightseen.description}</p>
			</div>
		</section>
	)

}