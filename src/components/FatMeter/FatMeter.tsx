import styles from "./FatMeter.module.css";

interface FatMeterProps {
	fatPercentage: number;
	showValue?: boolean;
}

const FatMeter = ({ fatPercentage, showValue = true }: FatMeterProps) => {
	return (
		<div className={styles.fatMeter}>
			<div className={styles.meterLabels}>
				<span>Maigre</span>
				<span>Gras</span>
			</div>

			<div className={styles.meterBar}>
				<div
					className={styles.meterFill}
					style={{ width: `${fatPercentage}%` }}
				/>
			</div>

			{showValue && (
				<div className={styles.meterValue}>{fatPercentage}% de gras</div>
			)}
		</div>
	);
};

export default FatMeter;
