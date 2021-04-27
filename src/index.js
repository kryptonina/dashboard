import ReactDOM from "react-dom";
import App from "./App";
import reducer from "./reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const rootElement = document.getElementById("root");
const store = createStore(reducer, {isMenuVisible: false});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  rootElement
);
