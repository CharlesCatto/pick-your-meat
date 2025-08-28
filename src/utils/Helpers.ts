import { useMeatData } from "../hooks/useMeatData";
import type { Animal } from "../data/types";

export const getAnimalNameById = (
	animalId: number,
	animals: Animal[],
): string => {
	const animal = animals.find((a) => a.id === animalId);
	return animal ? animal.nom : "Animal inconnu";
};

export const getAnimalEmojiById = (
	animalId: number,
	animals: Animal[],
): string => {
	const animal = animals.find((a) => a.id === animalId);
	return animal ? animal.emoji || "❓" : "❓";
};

export const useAnimalHelpers = () => {
	const { animals } = useMeatData();

	return {
		getAnimalNameById: (animalId: number) =>
			getAnimalNameById(animalId, animals),
		getAnimalEmojiById: (animalId: number) =>
			getAnimalEmojiById(animalId, animals),
	};
};
