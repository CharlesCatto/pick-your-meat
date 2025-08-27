import { useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./Cards.module.css";
import { technologies, categories } from "../../data/meat";

const Cards = () => {
	const [activeFilters, setActiveFilters] = useState<string[]>([]);
	const [isRandomMode, setIsRandomMode] = useState(false);
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [isBlurred, setIsBlurred] = useState(false);

	// Filtrer les technologies en fonction des filtres actifs
	const filteredTechs =
		activeFilters.length > 0
			? technologies.filter((tech) => activeFilters.includes(tech.category))
			: technologies;

	// Fonction pour toggle un filtre
	const toggleFilter = (category: string) => {
		setActiveFilters((prev) =>
			prev.includes(category)
				? prev.filter((item) => item !== category)
				: [...prev, category],
		);
		// Quitter le mode random quand on change les filtres
		setIsRandomMode(false);
	};

	// Fonction pour passer à la carte suivante (aléatoire ou séquentielle)
	const nextCard = () => {
		if (filteredTechs.length === 0) return;

		if (isRandomMode) {
			// Mode aléatoire : choisir une carte au hasard
			const randomIndex = Math.floor(Math.random() * filteredTechs.length);
			setCurrentCardIndex(randomIndex);
		} else {
			// Mode séquentiel : passer à la carte suivante
			setCurrentCardIndex((prev) => (prev + 1) % filteredTechs.length);
		}
	};

	// Fonction pour passer à la carte précédente (en mode séquentiel)
	const prevCard = () => {
		if (filteredTechs.length === 0) return;
		setCurrentCardIndex(
			(prev) => (prev - 1 + filteredTechs.length) % filteredTechs.length,
		);
	};

	// Fonction pour activer/désactiver le mode random (une carte à la fois)
	const toggleRandomMode = () => {
		setIsRandomMode((prev) => !prev);
		if (!isRandomMode && filteredTechs.length > 0) {
			// Si on active le mode random, choisir une carte aléatoire
			const randomIndex = Math.floor(Math.random() * filteredTechs.length);
			setCurrentCardIndex(randomIndex);
		}
	};

	// Fonction pour le mode devinette (random + blur)
	const toggleBlindMode = () => {
		setIsBlurred((prev) => !prev);
		if (!isRandomMode) {
			// Si on n'est pas en mode random, l'activer
			toggleRandomMode();
		}
	};

	return (
		<div className={styles.container}>
			<h1>Galerie des Technologies</h1>

			{/* Section des Contrôles (Filtres & Boutons) */}
			<div className={styles.controls}>
				{/* Filtres par Catégorie */}
				<div className={styles.filterGroup}>
					<h3>Filtrer par catégorie :</h3>
					<div className={styles.filterButtons}>
						{categories.map((category) => (
							<button
								type="button"
								key={category}
								onClick={() => toggleFilter(category)}
								className={`${styles.filterButton} ${activeFilters.includes(category) ? styles.active : ""}`}
							>
								{category}
							</button>
						))}
					</div>
				</div>

				{/* Boutons d'Action */}
				<div className={styles.actionGroup}>
					<button
						type="button"
						onClick={toggleRandomMode}
						className={`${styles.actionButton} ${isRandomMode ? styles.active : ""}`}
					>
						{isRandomMode ? "🔀 Mode Random (ON)" : "🔀 Mode Random"}
					</button>

					<button
						type="button"
						onClick={toggleBlindMode}
						className={`${styles.actionButton} ${isBlurred ? styles.active : ""}`}
					>
						{isBlurred ? "👀 Voir la Réponse" : "🙈 Mode Devinette"}
					</button>

					{/* Boutons de navigation si en mode une-carte-à-la-fois */}
					{isRandomMode && filteredTechs.length > 0 && (
						<>
							<button
								type="button"
								onClick={prevCard}
								className={styles.actionButton}
							>
								◀️ Précédent
							</button>
							<button
								type="button"
								onClick={nextCard}
								className={styles.actionButton}
							>
								Suivant ▶️
							</button>
							<span className={styles.counter}>
								{currentCardIndex + 1} / {filteredTechs.length}
							</span>
						</>
					)}
				</div>
			</div>

			{/* Affichage des Cartes */}
			<div className={styles.cardsContainer}>
				{filteredTechs.length === 0 ? (
					<p className={styles.noResults}>
						Aucune technologie ne correspond à vos filtres.
					</p>
				) : isRandomMode ? (
					// Mode une carte à la fois
					<div className={styles.singleCard}>
						<Card
							tech={filteredTechs[currentCardIndex]}
							isBlurred={isBlurred}
							blurContentOnly={true} // On blur uniquement le contenu, pas le titre
						/>
					</div>
				) : (
					// Mode galerie (toutes les cartes)
					<div className={styles.cardsGrid}>
						{filteredTechs.map((tech) => (
							<Card key={tech.id} tech={tech} />
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Cards;
