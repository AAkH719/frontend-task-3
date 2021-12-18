import Link from "next/link";

export interface NavigationAllLink {
	name: string
	href: string
}

export interface LinkProps {
	link: NavigationAllLink
}

export function NavigationLink(props: LinkProps) {
	return (
		<li>
			<Link href={props.link.href}>
				<a className="menu__link" >{props.link.name}</a>
			</Link>
		</li>
	)
}