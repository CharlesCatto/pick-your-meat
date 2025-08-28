import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App/App.tsx";
import { LanguageProvider } from "./context/LanguageProvider";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<LanguageProvider>
			<App />
		</LanguageProvider>
	</StrictMode>,
);
