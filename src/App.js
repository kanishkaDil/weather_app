import Result from './Result';
import img1 from './assets/img1.png'
import './App.css';
import { BsGithub } from 'react-icons/bs';
function App() {
  return (
    
    <div >
      <div class="box">
      <div><h1>Weather App</h1>;</div>
      <div><img style={{ width: 400, height: 380 }} src={img1} alt="Logo" />;</div>
      </div>
      <div class="box">
      <div>
      <Result cordinate="6.94,79.85" city="Colombo"/>
      </div>
      <div>
      <Result cordinate="7.29,80.63" city="Kandy"/>
      </div>
      <div>
      <Result cordinate="6.03,80.21" city="Galle"/>
      </div>
      <div>
      <Result cordinate="6.99,81.05" city="Badulla"/>
      </div>
      </div>
      
      <div style={{textAlign: 'right'}}>
      <h3><a href="https://github.com/kanishkaDil/weather_app">Git<BsGithub /></a></h3>
      </div>
    </div>
  );
}

export default App;
