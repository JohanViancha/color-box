import ReactDOM from "react-dom/client";
import { useColors } from "./hooks/useColors";
import ColorPicker from "./components/ColorPicker";
import "./index.css";

const App = () => {
  const { color, handleSubmitSaveColor, handleChangeColor } =
    useColors();

  return (<div className="container">
    <ColorPicker
      color={color}
      handleChangeColor={handleChangeColor}
      handleSubmitSaveColor={handleSubmitSaveColor}
    />
  </div>);
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
