import Link from "next/link";
import { NavigationLink, NavigationAllLink } from "./navigation/navigation-link";

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

export function Footer() {
	return (
		<footer className="footer">
			<nav className="footer-menu">
				<div className="footer-menu__title">Меню</div>
				<ul className="footer-menu__list">
					{
						allLink.map((item: NavigationAllLink, index: number) =>
							<NavigationLink link={item} key={`links_${index}`} />
						)
					}
				</ul>
			</nav>
			<div className="footer-contacts">
				<div className="footer-contacts__title">Контакты</div>
				<div className="footer-contacts__text">655019, Республика Хакасия, г. Абакан, пр. Ленина, д. 67 <br /> Справочная
					служба: 8 (3902) 22-53-35, факс: 8 (3902) 24-30-71 <br /> Электронная почта: kancler@vskhakasia.ru</div>
			</div>
			<p className="footer__text">Офицальный сайт Агренства Туризма Республики Хакасия © 2021</p>
		</footer>
	)
}