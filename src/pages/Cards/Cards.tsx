import { useState, useMemo, useEffect } from "react";
import Card from "../../components/Card/Card";
import { animals, meatCuts } from "../../data/meatData";
import styles from "./Cards.module.css";

const Cards = () => {
	// États pour les filtres
	const [selectedAnimals, setSelectedAnimals] = useState<string[]>([]);
	const [isRandomMode, setIsRandomMode] = useState(false);
	const [currentCutIndex, setCurrentCutIndex] = useState(0);
	const [isBlurred, setIsBlurred] = useState(false);
	const [fatFilter, setFatFilter] = useState(0);

	// Filtrer les cuts en fonction des animaux sélectionnés et du filtre de gras
	const filteredCuts = useMemo(() => {
		let cuts = meatCuts;

		// Filtre par animal
		if (selectedAnimals.length > 0) {
			cuts = cuts.filter((cut) =>
				selectedAnimals.includes(cut.animal_id.toString()),
			);
		}

		// Filtre par pourcentage de gras
		cuts = cuts.filter((cut) => cut.gras >= fatFilter);

		return cuts;
	}, [selectedAnimals, fatFilter]);

	// Réinitialiser l'index quand les filtres changent
	useEffect(() => {
		setCurrentCutIndex(0);
		if (filteredCuts.length === 0) {
			setIsRandomMode(false);
		}
	}, [filteredCuts]);

	// Fonction pour toggle un animal
	const toggleAnimal = (animalId: string) => {
		setSelectedAnimals((prev) =>
			prev.includes(animalId)
				? prev.filter((id) => id !== animalId)
				: [...prev, animalId],
		);
		setIsRandomMode(false);
	};

	// Fonction pour passer à la cut suivante
	const nextCut = () => {
		if (filteredCuts.length === 0) {
			setIsRandomMode(false);
			return;
		}
		const randomIndex = Math.floor(Math.random() * filteredCuts.length);
		setCurrentCutIndex(randomIndex);
	};

	// Fonction pour activer/désactiver le mode random
	const toggleRandomMode = () => {
		if (filteredCuts.length === 0) return;

		setIsRandomMode((prev) => !prev);
		if (!isRandomMode) {
			nextCut();
		}
	};

	// Fonction pour le mode devinette
	const toggleBlindMode = () => {
		if (filteredCuts.length === 0) return;

		setIsBlurred((prev) => !prev);
		if (!isRandomMode) {
			toggleRandomMode();
		}
	};

	return (
		<div className={styles.container}>
			<h1>Découvrez les Morceaux de Viande</h1>

			{/* Section des Contrôles */}
			<div className={styles.controls}>
				{/* Filtres par Animal */}
				<div className={styles.filterGroup}>
					<h3>Filtrer par animal :</h3>
					<div className={styles.filterButtons}>
						{animals.map((animal) => (
							<button
								type="button"
								key={animal.id}
								onClick={() => toggleAnimal(animal.id.toString())}
								className={`${styles.filterButton} ${selectedAnimals.includes(animal.id.toString()) ? styles.active : ""}`}
							>
								{animal.emoji} {animal.nom}
							</button>
						))}
					</div>
				</div>

				{/* Filtre de Gras */}
				<div className={styles.filterGroup}>
					<h3>Teneur minimum en gras: {fatFilter}%</h3>
					<input
						type="range"
						min="0"
						max="30"
						value={fatFilter}
						onChange={(e) => setFatFilter(Number(e.target.value))}
						className={styles.slider}
					/>
				</div>

				{/* Boutons d'Action */}
				<div className={styles.actionGroup}>
					<button
						type="button"
						onClick={toggleRandomMode}
						disabled={filteredCuts.length === 0}
						className={`${styles.actionButton} ${isRandomMode ? styles.active : ""} ${filteredCuts.length === 0 ? styles.disabled : ""}`}
					>
						{isRandomMode ? "🎲 Mode Random (ON)" : "🎲 Mode Random"}
					</button>

					<button
						type="button"
						onClick={toggleBlindMode}
						disabled={filteredCuts.length === 0}
						className={`${styles.actionButton} ${isBlurred ? styles.active : ""} ${filteredCuts.length === 0 ? styles.disabled : ""}`}
					>
						{isBlurred ? "👀 Voir la Réponse" : "🙈 Mode Devinette"}
					</button>

					{/* Boutons de navigation */}
					{isRandomMode && filteredCuts.length > 0 && (
						<>
							<button
								type="button"
								onClick={nextCut}
								className={styles.actionButton}
							>
								Suivant ▶️
							</button>
							<span className={styles.counter}>
								{currentCutIndex + 1} / {filteredCuts.length}
							</span>
						</>
					)}
				</div>
			</div>

			{/* Message si aucun résultat */}
			{filteredCuts.length === 0 && (
				<div className={styles.noResults}>
					<h3>🧐 Aucun morceau ne correspond à vos critères</h3>
					<p>
						Essayez de réduire le filtre de gras ou de sélectionner d'autres
						animaux.
					</p>
				</div>
			)}

			{/* Affichage des Cartes */}
			<div className={styles.cardsContainer}>
				{filteredCuts.length > 0 && isRandomMode ? (
					// Mode une carte à la fois
					<div className={styles.singleCard}>
						<Card
							cut={filteredCuts[currentCutIndex]}
							isBlurred={isBlurred}
							blurContentOnly={true}
						/>
					</div>
				) : filteredCuts.length > 0 ? (
					// Mode galerie (toutes les cartes)
					<div className={styles.cardsGrid}>
						{filteredCuts.map((cut) => (
							<Card key={cut.id} cut={cut} />
						))}
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Cards;
