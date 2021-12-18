import { Sightseen, SightseensBlock } from "./sightseens-item"

const allSightseens: SightseensBlock[] = [
	{
		title: 'Тропа предков',
		image: 'img/image-attract.png',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto exercitationemcommodi ipsa adipisci facilis cum placeat velit. Earum consectetur cum maxime. Molestias quos dicta illumeos. Eius odio fugit ducimus hic est quae debitis voluptatum, cumque recusandae repellat autvero.'
	},
	{
		title: 'Озеро Беле',
		image: 'img/image-attract.png',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto exercitationemcommodi ipsa adipisci facilis cum placeat velit. Earum consectetur cum maxime. Molestias quos dicta illumeos. Eius odio fugit ducimus hic est quae debitis voluptatum, cumque recusandae repellat autvero.'
	},
	{
		title: 'Сундуки',
		image: 'img/image-attract.png',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto exercitationemcommodi ipsa adipisci facilis cum placeat velit. Earum consectetur cum maxime. Molestias quos dicta illumeos. Eius odio fugit ducimus hic est quae debitis voluptatum, cumque recusandae repellat autvero.'
	},

]

export function Sightseens() {
	return (
		<article id="title_list1" className="attractions">
			<div className="container">
				<h2 className="attractions__title">Достопримечательности</h2>
				{
					allSightseens.map((item: SightseensBlock, index: number) =>
						<Sightseen sightseen={item} key={`sightseens_${index}`} />
					)
				}
			</div>
		</article>
	)
}