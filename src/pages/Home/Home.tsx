import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useTranslation } from "../../hooks/useTranslation";

const Home = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.container}>
			<section className={styles.hero}>
				<h1>{t("home.title")}</h1>
				<p>{t("home.subtitle")}</p>
				<Link to="/cards" className={styles.ctaButton}>
					{t("home.cta")}
				</Link>
			</section>

			<section className={styles.features}>
				<div className={styles.featureGrid}>
					<div className={styles.featureCard}>
						<div className={styles.featureIcon}>🔍</div>
						<h3>{t("home.features.explore.title")}</h3>
						<p>{t("home.features.explore.description")}</p>
					</div>

					<div className={styles.featureCard}>
						<div className={styles.featureIcon}>🎲</div>
						<h3>{t("home.features.randomize.title")}</h3>
						<p>{t("home.features.randomize.description")}</p>
					</div>

					<div className={styles.featureCard}>
						<div className={styles.featureIcon}>🙈</div>
						<h3>{t("home.features.guess.title")}</h3>
						<p>{t("home.features.guess.description")}</p>
					</div>

					<div className={styles.featureCard}>
						<div className={styles.featureIcon}>📱</div>
						<h3>{t("home.features.mobile.title")}</h3>
						<p>{t("home.features.mobile.description")}</p>
					</div>
				</div>
			</section>

			<section className={styles.quickActions}>
				<h2>{t("home.quickActions.title")}</h2>
				<div className={styles.actionButtons}>
					<Link to="/cards" className={styles.actionButton}>
						🎲 {t("home.quickActions.random")}
					</Link>
					<Link to="/animals" className={styles.actionButton}>
						🐄 {t("home.quickActions.byAnimal")}
					</Link>
					<Link to="/about" className={styles.actionButton}>
						ℹ️ {t("home.quickActions.about")}
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Home;
