import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
	return (
		<div className={styles.container}>
			<section className={styles.hero}>
				<h1>Découvrez l'Univers de la Viande</h1>
				<p>
					Explorez, apprenez et maîtrisez les différents morceaux et leurs
					caractéristiques
				</p>
				<Link to="/cards" className={styles.ctaButton}>
					🥩 Explorer les Morceaux
				</Link>
			</section>

			<section className={styles.features}>
				<div className={styles.featureGrid}>
					<div className={styles.featureCard}>
						<div className={styles.featureIcon}>🔍</div>
						<h3>Explorez</h3>
						<p>
							Découvrez des dizaines de morceaux de viande avec leurs
							caractéristiques détaillées
						</p>
					</div>

					<div className={styles.featureCard}>
						<div className={styles.featureIcon}>🎲</div>
						<h3>Randomisez</h3>
						<p>
							Tirez au sort des morceaux aléatoires pour découvrir de nouvelles
							coupes
						</p>
					</div>

					<div className={styles.featureCard}>
						<div className={styles.featureIcon}>🙈</div>
						<h3>Devinette</h3>
						<p>
							Testez vos connaissances en devinant le morceau à partir de ses
							caractéristiques
						</p>
					</div>

					<div className={styles.featureCard}>
						<div className={styles.featureIcon}>📱</div>
						<h3>Mobile Friendly</h3>
						<p>Accédez à toutes les informations même depuis votre téléphone</p>
					</div>
				</div>
			</section>

			<section className={styles.quickActions}>
				<h2>Commencez votre exploration</h2>
				<div className={styles.actionButtons}>
					<Link to="/cards" className={styles.actionButton}>
						🎲 Mode Aléatoire
					</Link>
					<Link to="/animals" className={styles.actionButton}>
						🐄 Par Animal
					</Link>
					<Link to="/about" className={styles.actionButton}>
						ℹ️ À Propos
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Home;
