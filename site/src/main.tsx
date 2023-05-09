import { createRoot } from 'react-dom/client'
import { App } from "./App";
import { AppContextProvider } from "./AppContext";
import "./external/react-splitpane.css";
import "./external/react-treeview.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
);
