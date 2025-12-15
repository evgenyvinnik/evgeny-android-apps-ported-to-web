import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to Evgeny's Android Apps Ported to Web</h1>
      <p className="subtitle">
        My early in career apps ported to the modern web platform
      </p>

      <div className="apps-grid">
        <div className="app-card">
          <h2>Coming Soon</h2>
          <p>Apps will be added here soon</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
