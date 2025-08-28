import styles from "./Animals.module.css";
import FatMeter from "../../components/FatMeter/FatMeter";
import type { Animal } from "../../data/types";
import { useMeatData } from "../../hooks/useMeatData";
import { useTranslation } from "../../hooks/useTranslation";

const Animals: React.FC = () => {
	const { t } = useTranslation();
	const { animals, meatCuts } = useMeatData();

	const getCutsForAnimal = (animalId: number) => {
		return meatCuts.filter((cut) => cut.animal_id === animalId);
	};

	return (
		<div className={styles.animalsPage}>
			<h1>{t("animals.title")}</h1>
			<div className={styles.animalList}>
				{animals.map((animal: Animal) => {
					const cutsForAnimal = getCutsForAnimal(animal.id);

					return (
						<div key={animal.id} className={styles.animalCard}>
							<div className={styles.animalHeader}>
								<h2>{animal.nom}</h2>
								<span className={styles.scientificName}>
									{animal.nom_scientifique}
								</span>
							</div>

							<img
								src={animal.image_url}
								alt={animal.nom}
								className={styles.animalImage}
							/>

							<p className={styles.animalDescription}>{animal.description}</p>

							<div className={styles.cutsSection}>
								<h3>
									{t("animals.cutsAvailable")} ({cutsForAnimal.length})
								</h3>
								<div className={styles.cutsGrid}>
									{cutsForAnimal.map((cut) => (
										<div key={cut.id} className={styles.cutCard}>
											<h4>{cut.nom}</h4>
											<p className={styles.cutPart}>{cut.partie_anatomique}</p>

											<div className={styles.cutDetails}>
												<span>
													{t("common.tenderness")}: {cut.tendrete}/5
												</span>
												<span>
													{t("common.price")}: {cut.prix_kg}€/kg
												</span>
											</div>

											<FatMeter fatPercentage={cut.gras} />

											<div className={styles.cutUses}>
												<strong>{t("common.uses")}:</strong>
												<div className={styles.useTags}>
													{cut.utilisation.map((use, index) => (
														<span
															key={`${cut.id}-${use}-${index}`}
															className={styles.useTag}
														>
															{use}
														</span>
													))}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Animals;
