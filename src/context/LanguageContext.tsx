import { createContext } from "react";

export type Language = "en" | "fr";

export interface LanguageContextType {
	language: Language;
	toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);
