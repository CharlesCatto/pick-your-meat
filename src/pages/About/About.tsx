import styles from "./About.module.css";

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>À Propos de DevTech Cards</h1>

				<section className={styles.section}>
					<h2>🎯 Le Concept</h2>
					<p>
						DevTech Cards est une application interactive conçue pour aider les
						développeurs à explorer, apprendre et maîtriser l'écosystème
						complexe des technologies modernes de développement.
					</p>
					<p>
						Que vous soyez débutant cherchant à comprendre le paysage tech ou
						expert voulant découvrir de nouveaux outils, cette plateforme vous
						offre une vue d'ensemble visualisable et interactive.
					</p>
				</section>

				<section className={styles.section}>
					<h2>✨ Fonctionnalités</h2>
					<ul>
						<li>
							<strong>📚 Catalogue complet</strong> : Découvrez des centaines de
							technologies classées par catégorie
						</li>
						<li>
							<strong>🎲 Mode aléatoire</strong> : Explorez les technologies une
							par une de manière aléatoire
						</li>
						<li>
							<strong>🙈 Mode devinette</strong> : Testez vos connaissances en
							devinant la technologie cachée
						</li>
						<li>
							<strong>🔍 Filtres intelligents</strong> : Filtrez par catégorie
							pour affiner votre exploration
						</li>
						<li>
							<strong>📱 Responsive design</strong> : Accessible sur tous vos
							appareils
						</li>
					</ul>
				</section>

				<section className={styles.section}>
					<h2>👨‍💻 Créateur</h2>
					<p>
						Développé avec ❤️ par <strong>Charles Catto</strong>, développeur
						passionné par l'écosystème tech et la transmission de connaissances.
					</p>

					<div className={styles.links}>
						<a
							href="https://charlescatto.github.io/Linktree/"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}
						>
							🌳 Linktree
						</a>
						<a
							href="https://www.linkedin.com/in/charles-catto/"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}
						>
							💼 LinkedIn
						</a>
						<a href="charlescatto.outlook.fr" className={styles.link}>
							✉️ Email
						</a>
					</div>
				</section>

				<section className={styles.section}>
					<h2>🛠️ Technos utilisées</h2>
					<p>
						Cette application a été construite avec React, TypeScript, Vite et
						CSS Modules - un parfait exemple des technologies qu'elle cherche à
						présenter !{" "}
						<a
							href="https://github.com/CharlesCatto/dev-tech-cards"
							className={styles.link}
						>
							github
						</a>
					</p>
				</section>
			</div>
		</div>
	);
};

export default About;
