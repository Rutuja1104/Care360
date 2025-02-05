import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/Button";
import "./assets/scss/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BUTTON_TYPE } from "./libs/constatnt";
import Label from "./components/label/Label";
import TextInput from "./components/input/textinput/TextInput";

function App() {
  return (
    <div className="App">
      <Button styles={{ width: "4.5rem", marginRight: "1rem", display: "flex" }}>Hii</Button>
      <Button
        variant={BUTTON_TYPE.BUTTON_WITH_RED_COLOR_BG}
        styles={{ width: "4.5rem", marginRight: "1rem", display: "flex" }}
        onClickCb={() =>{
        }
        }
      >
        Cancel
      </Button>
      <Label>Name:
      <TextInput></TextInput>            
      </Label>
    </div>
  );
}

export default App;
