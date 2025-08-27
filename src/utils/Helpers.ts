import { animals } from "../data/meatData";

export const getAnimalNameById = (animalId: number): string => {
	const animal = animals.find((a) => a.id === animalId);
	return animal ? animal.nom : "Animal inconnu";
};

export const getAnimalEmojiById = (animalId: number): string => {
	const animal = animals.find((a) => a.id === animalId);
	return animal ? animal.emoji || "❓" : "❓";
};
