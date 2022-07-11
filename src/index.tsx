import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import App from "./components/App"
import { store } from "./app/store"

const container = document.getElementById("root")
if (!container) throw new Error("#root element not found")

const root = createRoot(container)
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)
