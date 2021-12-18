import { useState, useEffect } from "react"
import { Navigation } from "../navigation/navigation"
import { WelcomeText } from "./welcome-text"

export function Welcome() {
	const [isMenuVisible, setMenuVisible] = useState<boolean>(false)
	const [isPageScrolledDown, setPageScrolledDown] = useState<boolean>(false)

	const handlePageScroll = () => {
		if (window.scrollY > 100) {
			setPageScrolledDown(true)
		} else {
			setPageScrolledDown(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handlePageScroll)

		return () => window.removeEventListener('scroll', handlePageScroll)
	})
	function buttonMenuClick() {
		setMenuVisible(!isMenuVisible);
		if (!isMenuVisible) {
			document.body.classList.add('_lock')
			document.querySelector('.welcome__arrow')?.classList.add('_active')
		} else {
			document.body.classList.remove('_lock')
			document.querySelector('.welcome__arrow')?.classList.remove('_active')
		}

	}

	return (
		<article id="title_list0" className="welcome">
			<header className={`header${isPageScrolledDown ? ' _active' : ''}`}>
				<a className="header__logo"></a>
				<Navigation isMenuVisible={isMenuVisible} />
				<button className={`header__button${isMenuVisible ? ' _active' : ''}`} type="button" onClick={buttonMenuClick}><span></span></button>
			</header>
			<WelcomeText />
		</article>
	)
}