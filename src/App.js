// import { celsius_to_fahrenheit } from "./celsius_to_fahrenheit";
const celsius_to_fahrenheit = require("./celsius_to_fahrenheit")

function App() {
  return (
    <div >
<h1>Weather app {celsius_to_fahrenheit(10)}</h1>
    </div>
  );
}

export default App;
