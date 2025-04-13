// src/pages/HomePage.jsx
import { createSignal } from "solid-js";
import welcomeImage from '../assets/logo.png'; // Ensure you have an image at this path

export default function HomePage() {
  const [showMore, setShowMore] = createSignal(false);

  const handleToggle = () => {
    setShowMore(!showMore());
  };

  return (
    <div class="page-container">
      <header>
        <h1>Welcome to the Ultimate GTA 5 Roleplay Server</h1>
      </header>
      <section class="intro">
        <img src={welcomeImage} alt="Welcome to GTA 5 Roleplay" />
        <p>
          Immerse yourself in the vibrant world of Los Santos. Our server offers a top-tier roleplay experience with endless possibilities and adventures.
        </p>
        <button onClick={handleToggle}>
          {showMore() ? "Show Less" : "Show More"}
        </button>
      </section>
      {showMore() && (
        <section class="details">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Realistic roleplay scenarios and interactions.</li>
            <li>Friendly and supportive community.</li>
            <li>Regular updates and new content.</li>
            <li>Active and experienced admins to assist you.</li>
          </ul>
          <p>
            Whether you're a seasoned roleplayer or new to the scene, our server is designed to offer an engaging and immersive experience for everyone.
          </p>
        </section>
      )}
    </div>
  );
}
