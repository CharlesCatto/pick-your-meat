import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
	return (
		<div className={styles.container}>
			<section className={styles.hero}>
				<h1>Explore the Dev World</h1>
				<p>Discover, learn & explore.</p>
				<Link to="/cards" className={styles.ctaButton}>
					Explore tech
				</Link>
			</section>
		</div>
	);
};

export default Home;
