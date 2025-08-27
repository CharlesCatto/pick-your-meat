import type { MeatCut } from "../../data/types";
import styles from "./Card.module.css";
import FatMeter from "../FatMeter/FatMeter";
import { getAnimalNameById } from "../../utils/Helpers";

interface CardProps {
	cut: MeatCut; // Change tech pour cut
	isBlurred?: boolean;
	blurContentOnly?: boolean;
}

const Card = ({
	cut,
	isBlurred = false,
	blurContentOnly = false,
}: CardProps) => {
	return (
		<article className={styles.card}>
			<header className={styles.cardHeader}>
				<h2 className={styles.cardTitle}>{cut.nom}</h2>
				<span className={styles.cardCategory}>
					{cut.partie_anatomique}
				</span>{" "}
			</header>

			<div
				className={`${styles.cardBody} ${isBlurred ? (blurContentOnly ? styles.blurredContent : styles.blurred) : ""}`}
			>
				<p>
					<strong>Animal:</strong> {getAnimalNameById(cut.animal_id)}
				</p>{" "}
				<p>
					<strong>Partie anatomique:</strong> {cut.partie_anatomique}
				</p>
				<p>
					<strong>Tendreté:</strong> {cut.tendrete}/5
				</p>
				<p>
					<strong>Prix:</strong> {cut.prix_kg} €/kg
				</p>
				<p>
					<strong>Temps de cuisson:</strong> {cut.temps_cuisson}
				</p>
				<div className={styles.paradigms}>
					<strong>Utilisations:</strong>
					<ul>
						{cut.utilisation.map((use, index) => (
							<li key={index}>{use}</li>
						))}
					</ul>
				</div>
				<FatMeter fatPercentage={cut.gras} />
			</div>
		</article>
	);
};

export default Card;
