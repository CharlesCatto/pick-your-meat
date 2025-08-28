import { useState, type ReactNode } from "react";
import { type Language, LanguageContext } from "./LanguageContext";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [language, setLanguage] = useState<Language>("en");

	const toggleLanguage = () => {
		setLanguage((prev) => (prev === "en" ? "fr" : "en"));
	};

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
