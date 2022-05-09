import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./Redux/store";
import './Styles/index.less';


const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>

  </StrictMode>
);