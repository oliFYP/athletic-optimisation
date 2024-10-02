import "../PagesCss/HomePage.css";
import Logo from "../img/Logo.png";

function HomePage() {
  return (
    <body>
      <header>
        <nav>
          <img src={Logo} alt="Logo" className="logo" />
          <div>
            <button id="login">Login</button>
            <button id="joinus">Join Us</button>
          </div>
        </nav>
      </header>

      <main className="main-section">
        <h1>Welcome !</h1>
        <p>
          Discover your ideal fitness <br /> coach for a healthier <br />{" "}
          lifestyle with our platform.
        </p>
        <button id="Get-started">Get started</button>
      </main>

      <section className="square-section">
        <div className="square left-square"></div>
        <div className="square right-square">
          <h2>Discover AO Fitness</h2>
          <p>
            Welcome to our platform dedicated to helping you discover the
            perfect fitness coach on your journey towards a healthier lifestyle.
            We believe in personalized fitness experiences that cater to your
            specific needs and goals. Our mission is to empower individuals to
            embrace a more active and balanced lifestyle.
          </p>
          <button id="learn-more">Learn more</button>
        </div>
      </section>
    </body>
  );
}

export default HomePage;
