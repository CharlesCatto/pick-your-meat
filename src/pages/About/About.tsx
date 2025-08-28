import styles from "./About.module.css";
import { useTranslation } from "../../hooks/useTranslation";

const About = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>{t("about.title")}</h1>

				<section className={styles.section}>
					<h2>{t("about.concept.title")}</h2>
					<p>{t("about.concept.text1")}</p>
					<p>{t("about.concept.text2")}</p>
				</section>

				<section className={styles.section}>
					<h2>{t("about.features.title")}</h2>
					<ul>
						<li>
							<strong>{t("about.features.catalog.title")}</strong> :{" "}
							{t("about.features.catalog.description")}
						</li>
						<li>
							<strong>{t("about.features.random.title")}</strong> :{" "}
							{t("about.features.random.description")}
						</li>
						<li>
							<strong>{t("about.features.guess.title")}</strong> :{" "}
							{t("about.features.guess.description")}
						</li>
						<li>
							<strong>{t("about.features.fatMeter.title")}</strong> :{" "}
							{t("about.features.fatMeter.description")}
						</li>
						<li>
							<strong>{t("about.features.filters.title")}</strong> :{" "}
							{t("about.features.filters.description")}
						</li>
						<li>
							<strong>{t("about.features.mobile.title")}</strong> :{" "}
							{t("about.features.mobile.description")}
						</li>
					</ul>
				</section>

				<section className={styles.section}>
					<h2>{t("about.creator.title")}</h2>
					<p>
						{t("about.creator.text1")}{" "}
						<strong>{t("about.creator.name")}</strong>,{" "}
						{t("about.creator.text2")}
					</p>

					<div className={styles.links}>
						<a
							href="https://charlescatto.github.io/Linktree/"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}
						>
							🌳 {t("about.links.linktree")}
						</a>
						<a
							href="https://www.linkedin.com/in/charles-catto/"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}
						>
							💼 {t("about.links.linkedin")}
						</a>
						<a href="mailto:charlescatto@outlook.fr" className={styles.link}>
							✉️ {t("about.links.email")}
						</a>
					</div>
				</section>

				<section className={styles.section}>
					<h2>{t("about.technologies.title")}</h2>
					<p>{t("about.technologies.text1")}</p>
					<p>
						{t("about.technologies.text2")}{" "}
						<a
							href="https://github.com/CharlesCatto/pick-your-meat"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}
						>
							GitHub
						</a>
					</p>
				</section>

				<section className={styles.section}>
					<h2>{t("about.inspiration.title")}</h2>
					<p>
						{t("about.inspiration.text1")}{" "}
						<a
							href="https://github.com/CharlesCatto/dev-tech-cards"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}
						>
							{t("about.inspiration.linkText")}
						</a>
						{t("about.inspiration.text2")}
					</p>
				</section>
			</div>
		</div>
	);
};

export default About;
