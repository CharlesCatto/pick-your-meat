import { useLanguage } from "./useLanguage";
import { animalsFR, meatCutsFR } from "../data/meatDataFR";
import { animalsEN, meatCutsEN } from "../data/meatDataEN";

export const useMeatData = () => {
	const { language } = useLanguage();

	if (language === "fr") {
		return { animals: animalsFR, meatCuts: meatCutsFR };
	}

	return { animals: animalsEN, meatCuts: meatCutsEN };
};

export const useMeatCategories = () => {
	const { animals } = useMeatData();
	const categories = [...new Set(animals.map((animal) => animal.category))];
	return categories;
};
