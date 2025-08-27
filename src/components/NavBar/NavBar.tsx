import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
const NavBar = () => {
	const [click, setClick] = useState(false);
	const navRef = useRef<HTMLDivElement>(null);

	const handleClick = () => setClick((prev) => !prev);
	const closeMobileMenu = () => setClick(false);

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				setClick(false);
			}
		};

		if (click) {
			document.addEventListener("mousedown", handleOutsideClick);
		} else {
			document.removeEventListener("mousedown", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [click]);

	const navItems = [
		{ path: "/", label: "Home" },
		{ path: "/cards", label: "Cards" },
		{ path: "/about", label: "About" },
		{ path: "/animals", label: "Animals" },
	];

	return (
		<nav className={styles.navbar}>
			<div className={styles.navContainer} ref={navRef}>
				<NavLink to="/" className={styles.navLogo} onClick={closeMobileMenu}>
					DevTech Cards
					<img src={logo} alt="logo of DevTech Cards" className={styles.logo} />
					<i className="fas fa-code" />
				</NavLink>

				<ul
					className={
						click ? `${styles.navMenu} ${styles.active}` : styles.navMenu
					}
				>
					{navItems.map((item) => (
						<li key={item.path} className={styles.navItem}>
							<NavLink
								to={item.path}
								className={({ isActive }) =>
									isActive
										? `${styles.navLinks} ${styles.active}`
										: styles.navLinks
								}
								onClick={closeMobileMenu}
								end
							>
								{item.label}
							</NavLink>
						</li>
					))}
				</ul>

				<button
					type="button"
					className={`${styles.navIcon} ${click ? styles.open : ""}`}
					onClick={handleClick}
					aria-label={click ? "Fermer le menu" : "Ouvrir le menu"}
				>
					<span />
					<span />
					<span />
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
