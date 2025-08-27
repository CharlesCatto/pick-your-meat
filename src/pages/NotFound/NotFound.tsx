import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>404</h1>
				<h2 className={styles.subtitle}>Page non trouvée</h2>
				<p className={styles.message}>
					Oups ! Il semble que la page que vous cherchez n'existe pas.
				</p>
				<Link to="/" className={styles.homeLink}>
					🏠 Retour à l'accueil
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
