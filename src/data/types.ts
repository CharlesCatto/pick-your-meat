export type AnimalCategory =
	// French
	| "bovin"
	| "volaille"
	| "poisson"
	| "gibier"
	| "porc"
	| "porcin"
	| "ovin"
	| "caprin"
	| "équidé"
	// English
	| "bovine"
	| "poultry"
	| "fish"
	| "game"
	| "pork"
	| "porcine"
	| "ovine"
	| "caprine"
	| "equine";

export interface Animal {
	id: number;
	nom: string;
	nom_scientifique: string;
	category: AnimalCategory;
	description: string;
	image_url: string;
	emoji?: string;
}

export interface MeatCut {
	id: number;
	nom: string;
	animal_id: number;
	partie_anatomique: string;
	tendrete: 1 | 2 | 3 | 4 | 5; // Échelle 1–5
	gras: number;
	utilisation: string[];
	prix_kg: number;
	temps_cuisson: string;
}

export interface CookingMethod {
	id: number;
	nom: string;
	description: string;
	suitable_cuts: number[];
}
