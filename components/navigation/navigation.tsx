import Link from "next/link";
import { NavigationAllLink, NavigationLink } from "./navigation-link";

const allLink: NavigationAllLink[] = [
	{
		name: "Главная",
		href: "/#title_list0"
	},
	{
		name: "Достопримечательности",
		href: "/#title_list1"
	},
	{
		name: "Туры",
		href: "/#title_list2"
	},
	{
		name: "Контакты",
		href: "/#title_list3"
	},
]

export const Navigation = (props: { isMenuVisible: boolean }) => {

	const navigationLinkClick = () => {
		document.querySelector('.menu')?.classList.toggle('_active')
		document.querySelector('.header__button')?.classList.toggle('_active')
		document.querySelector('.welcome__arrow')?.classList.toggle('_active')
		document.body.classList.toggle('_lock')
	}
	return (
		<nav className={`menu${props.isMenuVisible ? ' _active' : ''}`}>
			<ul className="menu__list" onClick={navigationLinkClick}>
				{
					allLink.map((item: NavigationAllLink, index: number) =>
						<NavigationLink link={item} key={`links_${index}`} />
					)
				}
			</ul>
		</nav>
	)
}