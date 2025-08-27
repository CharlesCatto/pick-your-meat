import type { Technology } from "../../data/meat";
import styles from "./Card.module.css";

interface CardProps {
	tech: Technology;
	isBlurred?: boolean;
	blurContentOnly?: boolean;
}

const Card = ({
	tech,
	isBlurred = false,
	blurContentOnly = false,
}: CardProps) => {
	return (
		<article className={styles.card}>
			<header className={styles.cardHeader}>
				<h2 className={styles.cardTitle}>{tech.nom}</h2>
				<span className={styles.cardCategory}>{tech.category}</span>
			</header>

			<div
				className={`${styles.cardBody} ${isBlurred ? (blurContentOnly ? styles.blurredContent : styles.blurred) : ""}`}
			>
				<p>
					<strong>Type:</strong> {tech.type}
				</p>
				<p>
					<strong>Langage:</strong> {tech.langage}
				</p>
				<p>
					<strong>Rôle:</strong> {tech.role}
				</p>
				<p>
					<strong>Position:</strong> {tech.position}
				</p>
				<div className={styles.paradigms}>
					<strong>Paradigmes:</strong>
					<ul>
						{tech.paradigmes.map((paradigm) => (
							<li key={paradigm}>{paradigm}</li>
						))}
					</ul>
				</div>
			</div>
		</article>
	);
};

export default Card;
