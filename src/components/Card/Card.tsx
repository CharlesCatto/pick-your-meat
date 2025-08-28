import type { MeatCut } from "../../data/types";
import styles from "./Card.module.css";
import FatMeter from "../FatMeter/FatMeter";
import { useTranslation } from "../../hooks/useTranslation";
import { useAnimalHelpers } from "../../utils/Helpers";

interface CardProps {
	cut: MeatCut;
	isBlurred?: boolean;
	blurContentOnly?: boolean;
}

const Card = ({
	cut,
	isBlurred = false,
	blurContentOnly = false,
}: CardProps) => {
	const { t } = useTranslation();
	const { getAnimalNameById } = useAnimalHelpers();

	return (
		<article className={styles.card}>
			<header className={styles.cardHeader}>
				<h2 className={styles.cardTitle}>{cut.nom}</h2>
				<span className={styles.cardCategory}>{cut.partie_anatomique}</span>
			</header>

			<div
				className={`${styles.cardBody} ${isBlurred ? (blurContentOnly ? styles.blurredContent : styles.blurred) : ""}`}
			>
				<p>
					<strong>{t("common.animal")}:</strong>{" "}
					{getAnimalNameById(cut.animal_id)}
				</p>
				<p>
					<strong>{t("common.part")}:</strong> {cut.partie_anatomique}{" "}
				</p>
				<p>
					<strong>{t("common.tenderness")}:</strong> {cut.tendrete}/5{" "}
				</p>
				<p>
					<strong>{t("common.price")}:</strong> {cut.prix_kg} €/kg{" "}
				</p>
				<p>
					<strong>{t("common.cookingTime")}:</strong> {cut.temps_cuisson}{" "}
				</p>
				<div className={styles.paradigms}>
					<strong>{t("common.uses")}:</strong>
					<ul>
						{cut.utilisation.map((use, index) => (
							<li key={`${cut.id}-${use}-${index}`}>{use}</li>
						))}
					</ul>
				</div>
				<FatMeter fatPercentage={cut.gras} />
			</div>
		</article>
	);
};

export default Card;
