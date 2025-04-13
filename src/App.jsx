// App.jsx
import solidLogo from './assets/logo.png';
import './App.css';

function App() {
  return (
    <>
      <div class="container">
        <div class="landing_page">
          <div class="top_left_bar">
            <div class="button">
              <h1>Home</h1>
            </div>
            <div class="button">
              <h1>Rules</h1>
            </div>
            <div class="button">
              <h1>Store</h1>
            </div>
            <div class="button">
              <h1>Socials</h1>
            </div>
          </div>
          <div class="landing_page_info">
            <img src={solidLogo} alt="Solid Logo" />
            <p>
              Ultimate GTA 5 roleplay server where your imagination drives the action, delivering a top-tier, immersive experience in a world that echoes the vibrant life of Los Santos
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
