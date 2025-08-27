import styles from "./About.module.css";

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>À Propos de Pick Your Meat</h1>

				<section className={styles.section}>
					<h2>🎯 Le Concept</h2>
					<p>
						Pick Your Meat est une application interactive conçue pour aider les
						amateurs de viande à explorer, apprendre et maîtriser l'univers
						complexe des différentes viandes et leurs morceaux.
					</p>
					<p>
						Que vous soyez un chef cuisinier cherchant à perfectionner vos
						connaissances ou un simple amateur voulant mieux choisir ses
						morceaux, cette plateforme vous offre une vue d'ensemble
						visualisable et interactive du monde de la boucherie.
					</p>
				</section>

				<section className={styles.section}>
					<h2>✨ Fonctionnalités</h2>
					<ul>
						<li>
							<strong>📚 Catalogue complet</strong> : Découvrez des dizaines de
							morceaux de viande classés par animal et par catégorie
						</li>
						<li>
							<strong>🎲 Mode aléatoire</strong> : Explorez les morceaux un par
							un de manière aléatoire pour découvrir de nouvelles coupes
						</li>
						<li>
							<strong>🙈 Mode devinette</strong> : Testez vos connaissances en
							devinant le morceau de viande caché grâce à ses caractéristiques
						</li>
						<li>
							<strong>🥩 Jauge de gras</strong> : Visualisez instantanément la
							teneur en matière grasse de chaque morceau
						</li>
						<li>
							<strong>🔍 Filtres intelligents</strong> : Filtrez par type
							d'animal et pourcentage de gras pour affiner votre exploration
						</li>
						<li>
							<strong>📱 Design responsive</strong> : Accessible sur tous vos
							appareils
						</li>
					</ul>
				</section>

				<section className={styles.section}>
					<h2>👨‍💼 Créateur</h2>
					<p>
						Développé avec ❤️ par <strong>Charles Catto</strong>, passionné de
						développement web et de cuisine, curieux de comprendre l'univers de
						la boucherie et partager ces connaissances.
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
						<a href="mailto:charlescatto@outlook.fr" className={styles.link}>
							✉️ Email
						</a>
					</div>
				</section>

				<section className={styles.section}>
					<h2>🛠️ Technos utilisées</h2>
					<p>
						Cette application a été construite avec React, TypeScript, Vite et
						CSS Modules - démontrant la puissance des technologies web modernes
						même pour des sujets traditionnels comme la boucherie !
					</p>
					<p>
						Retrouvez le code source sur{" "}
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
					<h2>🔗 Inspiration</h2>
					<p>
						Ce projet est inspiré de{" "}
						<a
							href="https://github.com/CharlesCatto/dev-tech-cards"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}
						>
							DevTech Cards
						</a>
						, une application similaire dédiée aux technologies de
						développement, démontrant la flexibilité de cette architecture pour
						différents domaines.
					</p>
				</section>
			</div>
		</div>
	);
};

export default About;
