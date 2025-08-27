export interface Animal {
	id: number;
	nom: string;
	nom_scientifique: string;
	category:
		| "bovin"
		| "volaille"
		| "poisson"
		| "gibier"
		| "porc"
		| "porcin"
		| "ovin"
		| "caprin"
		| "équidé";
	description: string;
	image_url: string;
	emoji?: string;
}

export interface MeatCut {
	id: number;
	nom: string;
	animal_id: number;
	partie_anatomique: string;
	tendrete: 1 | 2 | 3 | 4 | 5; // Échelle de 1 à 5
	gras: number; // Pourcentage de gras (0-100)
	utilisation: string[];
	prix_kg: number;
	temps_cuisson: string;
}

export interface CookingMethod {
	id: number;
	nom: string;
	description: string;
	suitable_cuts: number[]; // IDs des cuts appropriés
}
