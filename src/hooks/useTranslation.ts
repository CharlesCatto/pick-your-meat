import { translations } from "../data/translations";
import { useLanguage } from "./useLanguage";

type TranslationValue = string | { [key: string]: TranslationValue };

export const useTranslation = () => {
	const { language } = useLanguage();

	const t = (key: string): string => {
		const keys = key.split(".");
		let value: TranslationValue = translations[language];

		for (const k of keys) {
			if (value && typeof value === "object" && k in value) {
				value = value[k];
			} else {
				console.warn(`Translation key not found: ${key}`);
				return key;
			}
		}

		if (typeof value === "string") {
			return value;
		}

		console.warn(`Translation value is not a string: ${key}`);
		return key;
	};

	return { t, language };
};
